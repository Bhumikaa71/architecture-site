<?php
    $con=mysqli_connect("localhost",'root',"","bsarchitect");

    if(isset($_POST['sign'])){
        $a=$_POST['txt'];
        $b=$_POST['pswd'];
        $c=$_POST['email'];
        $q="Insert into users (username,password,email)values('$a','$b','$c')";
        $run=mysqli_query($con,$q);
        if($run)
        echo "success insertion";

    }
    ?>

    <?php
    $con=mysqli_connect("localhost",'root',"","bsarchitect");
if(isset($_GET['log'])){
    $x = $_GET['lemail'];
    $y =$_GET['lpswd'];

    $q = "SELECT email,password from  users where email='$x' and password='$y'"; 
    $run = mysqli_query($con, $q);
    $count=mysqli_num_rows($run);

	}
    if($count !== 0)
        echo "Success insertion";
    else
        echo "Error: " . mysqli_error($con);

      mysqli_close($con);

?>

 

