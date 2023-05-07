<?php
class View {
    function returnJSON($app, $data, $statuscode, $message){

        if ($statuscode != 404) {
            $response = "Success";
        } else {
            $response = "Failed";
        }

        $resp = new stdClass();
        $resp->status = new stdClass();
        $resp->status->code = $statuscode;
        $resp->status->response = $response;
        $resp->status->message = $message;
        $resp->result = $data;
    
        $json = json_encode($resp);
    
        // Set the Content-Type header to application/json
        $app->response->setContentType('application/json', 'UTF-8');
	    $app->response->setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
        $app->response->setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        $app->response->setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	    $app->response->setHeader("Access-Control-Allow-Credentials", "true");	
        // Output the JSON string
        $app->response->setContent($json);
    
        // Send the response to the client
        $app->response->send();
    }
}
