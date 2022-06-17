<?php
$filename = __FILE__;
$originmd5 = md5(file_get_contents($filename));
$config_path= __DIR__."/../application/configs/application.ini";
$configs=parse_ini_file($config_path, true);
$production_configs=$configs['production'];
$crontaburl="http://api.mytongche.com/schedule/companylocation?urid=1403&token=123&userId=1403";
$ch = curl_init();
$companyInfos =[
    '&companyId=8677&locType=12',
]; 

$starttime =time();
while(1)
{
    foreach ($companyInfos as $param)
    {
        $ch = curl_init();
        $url = $crontaburl.$param;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $header[] = "Connection: keep-alive";
        $header[] = "Keep-Alive: 300";
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        $data = curl_exec($ch);
        curl_close($ch);
        if($data===false)
        {
            //$ch = curl_init();
        }
        else{
            echo $data."\n";
        }
        
    }
    sleep(30);
    $runtime = time()-$starttime;
    $newmd5 = md5(file_get_contents($filename));
    if($originmd5 != $newmd5 || $runtime>3600){
        system("nohup php $filename > /dev/null 2>&1 &");
        exit;
    }
}
