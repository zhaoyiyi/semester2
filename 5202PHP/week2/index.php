<?php
  if( isset($_REQUEST['btnLogin']) ){
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    echo 'username: ' . test('username') . '</br>';
    echo 'password: ' . test('passworasdd') . '</br>';
    echo var_dump($_REQUEST, $_SERVER['REQUEST_METHOD']);
  }

  function test($var){
    return isset($_REQUEST[$var]) ? $_REQUEST[$var] : 'is not set';
  }
 ?>


 <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'] ) ?>" method="post">
   <input type="text" name="username" placeholder="username" value="<?php echo $username ?>">
   <input type="password" name="password" placeholder="password" value="">

   <button type="submit" name="btnLogin">submit</button>
 </form>
