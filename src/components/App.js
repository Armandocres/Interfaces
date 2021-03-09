import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import InicioSesion from '../pages/IniciaSesion';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Welcome from '../pages/Welcome';
import Cursos from '../pages/Cursos';
import Recurso from '../pages/Recursos';
import Examen from '../pages/Examenes';
import Informacion from '../pages/Informacion';
import Resumen from '../pages/Resumen';
import NotFound from '../pages/NotFound';
import Inscripcion from '../pages/InscripcionCurso';
import Cuestionario from '../pages/Cuestionario';
const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={InicioSesion} />
        <Route exact path="/home/signin" component={SignIn} />
        <Route exact path="/home/signup" component={SignUp} />
        <Route exact path="/home/tutorial" component={Welcome} />
        <Route exact path="/home/tutorial/inscripcion" component={Inscripcion} />
        <Route exact path="/home/curso" component={Cursos} />
        <Route exact path="/home/curso/cuestionario" component={Cuestionario} />
        <Route exact path="/home/curso/resumen" component={Resumen } />
        <Route exact path="/home/curso/recurso" component={Recurso} />
        <Route exact path="/home/curso/examen" component={Examen} />
        <Route exact path="/home/informacion" component={Informacion} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;