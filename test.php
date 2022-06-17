<?php

define('UNSET_VALUE', 'UNSET_VALUE');

// Define path to application directory
defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../application'));


define('APP_KEY', '37bc1d17_e7d5_4b90_bda6_d36ef76cfcba');

$config = parse_ini_file(APPLICATION_PATH . '/configs/application.ini');
$appEnv = $config['app.env'] ?? 'production';

if (isset($_GET['dev']) && $_GET['dev'] == '1') {
    $appEnv = 'development';
}

$GLOBALS['selectMixId'] = 0;
if(isset($_GET['selectMixId']) && $_GET['selectMixId'] > 0){
    $GLOBALS['selectMixId'] = $_GET['selectMixId'];
}elseif(isset($_POST['selectMixId']) && $_POST['selectMixId'] > 0){
    $GLOBALS['selectMixId'] = $_POST['selectMixId'];
}

$GLOBALS['selectRMID'] = 0;
if(isset($_GET['selectRMID']) && $_GET['selectRMID']>0){
    $GLOBALS['selectRMID'] = $_GET['selectRMID'];
} else if(isset($_POST['selectRMID']) && $_POST['selectRMID'] > 0){
    $GLOBALS['selectRMID'] = $_POST['selectRMID'];
}
// Define application environment
//defined('APPLICATION_ENV')
//    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

define('APPLICATION_ENV', $appEnv);

// Ensure library/ is on include_path
set_include_path(implode(PATH_SEPARATOR, array(
    realpath(APPLICATION_PATH . '/../library'),
    get_include_path(),
)));

//error_reporting(E_ALL ^ E_NOTICE);
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED);

/** Zend_Application */
require_once 'Zend/Application.php';

// Create application, bootstrap, and run
$application = new Zend_Application(
    APPLICATION_ENV,
    APPLICATION_PATH . '/configs/application.ini'
);
$application->bootstrap();
