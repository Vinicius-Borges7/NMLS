app.get('/auth/google',
    passport.authenticate('google', {
        scope: [ 'profile', 'email'] 
    })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirecionar ou retornar uma resposta para o login bem-sucedido
    res.redirect('/dashboard');
  });
