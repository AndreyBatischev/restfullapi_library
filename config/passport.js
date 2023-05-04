import passport from 'passport';
import LocalStrategy from 'passport-local';
import GitHubStrategy from 'passport-github2';
import User from '../models/User.js';

passport.use(new LocalStrategy({ usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, { message: 'Incorrect email' });
            }

            const isValidPassword = await user.checkPassword(password);
            if (!isValidPassword) {
                return done(null, false, { message: 'Incorrect password' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new GitHubStrategy({
    clientID: 'd9a705f9bfed2169d060',
    clientSecret: '000c193c041527a4d7eca0900c094e8e4531e105',
    callbackURL: 'http://localhost:3000/auth/login'
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await User.findOne({ githubId: profile.id });

            if (!user) {
                user = new User({
                    githubId: profile.id,
                    username: profile.username,
                    email: profile.emails[0].value
                });
                await user.save();
            }

            done(null, user);
        } catch (error) {
            done(error);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport;
