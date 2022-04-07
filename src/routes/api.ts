import { Router } from "express";

import * as API from "../controller/frasesController";

const routes = Router();

routes.get('/ping',API.ping);
routes.get('/radon',API.radom);
routes.get('/list',API.listFrases);
routes.get('/frase/:id',API.getfrase);
routes.get('/fraseRadon',API.fraseRadon);

routes.post('/criarFrase',API.criarFrase);
routes.put('/editfrase/:id',API.editfrase);

routes.delete('/delete/:id',API.remove);

export default routes;