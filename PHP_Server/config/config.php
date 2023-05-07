<?php
$di = new \Phalcon\Di\FactoryDefault();
$db = new \Phalcon\Db\Adapter\Pdo\Mysql([
    "host" => "db",
    "username" => "myuser",
    "password" => "Mypassword2023",
    "dbname" => "mydatabase"
]);

$di->setShared('db', $db);
$di->setShared('modelsManager', new Phalcon\Mvc\Model\Manager());