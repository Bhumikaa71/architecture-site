 <?php
$con = mysqli_connect("localhost", 'root', "", "home");
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['contact'])){
    $a = $_POST['email'];
    $q = "INSERT INTO contact (email) VALUES ('$a')"; 
    $run = mysqli_query($con, $q);
    if($run)
        echo "Success insertion";
    else
        echo "Error: " . mysqli_error($con);
}
mysqli_close($con);
?>











