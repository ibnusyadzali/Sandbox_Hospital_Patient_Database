<?php

$app = new \Phalcon\Mvc\Micro();
$view = new View();

$app->options('/{catch:(.*)}', function () use ($app) {
    $app->response->setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
    $app->response->setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    $app->response->setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    $app->response->setHeader("Access-Control-Allow-Credentials", "true");
    $app->response->setStatusCode(200, "OK")->sendHeaders();
});

// create pasien data 
$app->post('/pasien', function () use ($app, $view) {
    $data = $app->request->getJsonRawBody();
    
    $pasien = new Pasien();
    $pasien->name = $data->name;
    $pasien->sex = $data->sex;
    $pasien->religion = $data->religion;
    $pasien->phone = $data->phone;
    $pasien->address = $data->address;
    $pasien->nik = $data->nik;
    $pasien->save();
    
    $message = "Success to add pasien data"; 
    $view->returnJSON($app, $pasien->toArray(), 201, $message);
});

// get all pasien data
$app->get('/pasien', function () use ($app, $view) {
    $pasien = new Pasien();
    $results = $pasien::find();
    $data = $results->toArray();
    
    $message = "Success to get all pasien data";
    $view->returnJSON($app, $data, 200, $message);
});

// get pasien data by id
$app->get('/pasien/{id}', function ($id) use ($app, $view) {
    $pasien = new Pasien();
    $results = $pasien::findFirst($id);
    $data = new ArrayObject();
    $message = "Success to get pasien data with id ";
    $message .= $id;

    if ($results != null){
        $data = $results->toArray();
        $view->returnJSON($app, $data, 200, $message);
    } else {
        $message = "Data not found";
        $view->returnJSON($app, $data, 404, $message);
    }
});

// update pasien data
$app->put('/pasien/{id}', function ($id) use ($app, $view) {
    $data = $app->request->getJsonRawBody();
    $ret = new ArrayObject();

    $pasien = new Pasien();
    $pasienobj = $pasien::findFirst($id);

    $r = new ArrayObject();
    if ($pasienobj != null){
        $pasienobj->name = $data->name;
        $pasienobj->sex = $data->sex;
        $pasienobj->religion = $data->religion;
        $pasienobj->phone = $data->phone;
        $pasienobj->address = $data->address;
        $pasienobj->nik = $data->nik;
        $pasienobj->save();

        $r = $pasienobj->toArray();
        $message = "Success to update pasien data with id ";
        $message .= $id;
        $view->returnJSON($app, $r, 201, $message);
    } else {
        $message = "Data not found";
        $view->returnJSON($app, $r, 404, $message);
    }
});

// delete pasien data by id
$app->delete('/pasien/{id}', function ($id) use ($app, $view) {
    $pasien = new Pasien();
    $results = $pasien::findFirst($id);
    $return = new ArrayObject();
    
    if ($results != null) {
        $results->delete();
        $message = "Success to deletepasien data with id ";
        $message .= $id;
        $view->returnJSON($app, $r, 200, $message);
    } else {
        $message = "Data not found";
        $view->returnJSON($app, $r, 404, $message);
    }
});

$app->notFound(function () use ($app) {
    $app->response->setContent("Not found");
    $app->response->setStatusCode(404, "Not Found")->sendHeaders();
});
$app->handle($_SERVER["REQUEST_URI"]);
