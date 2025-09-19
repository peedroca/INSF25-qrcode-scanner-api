import VisitasControllers from './src/Controllers/VisitasControllers.js'
import UsuariosControllers from './src/Controllers/UsuariosControllers.js'

export default function Roteamento(api) {
    api.use(VisitasControllers)
    api.use(UsuariosControllers)
}