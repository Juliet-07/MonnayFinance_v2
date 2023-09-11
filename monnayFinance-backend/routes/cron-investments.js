<?php
@session_start();
require_once("../config.php");
require_once("../function.php");
$query=$conn->query("select * from investments where end_date>NOW()");

if($query->num_rows>=1){
  while($row=$query->fetch_assoc()){
          $did;
      $support=1;
      $seen=0;
    $id=$row['id'];
$user=$row['user'];
 $amount=$row['amount'];
 $roi=$row['roi'];
 $roi2=$row['roi_gained'];
 $plan=$row['plan'];
 $time=plan($plan,"time");
 $commission=plan($plan,"commission");
 $percent=plan($plan,"income");
 $roi_gained=number_format(($commission/100)*$amount,2);
 $twi=removeComma($roi_gained);
  $total=removeComma(number_format($amount+$twi,2));
  $now=time();
$end=strtotime($row['end_date']);
$cron_lastdate=$row['cron_lastdate'];
$next_cron=date('Y-m-d H:i:s',strtotime("+ {$time}",strtotime($cron_lastdate)));
$title=$commission."% ROI Received";
$message="Congratulations.Your investment for ".$plan." plan has gained ".$commission."% ROI";
 $message.="$".$roi_gained." has been added to your wallet balance. Thank You.";

if($now>=strtotime($next_cron)){
      $query2=$conn->prepare("update investments set cron_lastdate=NOW(),roi_gained=roi_gained+'".$twi."' where id='".$id."'");
     
            if($query2->execute()){
                 $query4=$conn->prepare("update login set wallet=wallet+'".$twi."' where id='".$user."'");
      $query4->execute();
              if(($roi-$twi)==$roi2){
                $query3=$conn->prepare("update login set wallet=wallet+'".$amount."' where id='".$user."'");
                $query3->execute();
              }              
              if($query4->execute()){
                $messa2=$conn->prepare("insert into messages values(?,?,?,?,?,?,?)");
                $messa2->bind_param('iiissis',$did,$support,$user,$title,$message,$seen,$created_at);
                $messa2->execute();
              }
            }
} 
 }}
?>

