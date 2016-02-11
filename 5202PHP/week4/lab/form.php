<?php

var_dump($_REQUEST);
$radios = ['1', '2', '3', '4', '5'];

if( isset($_POST['btnLogin']) ){
  $username = getValue('username');
  $password = getValue('password');
  $favNumber = getValue('favNumber');
  $option = getValue('option');
  $checkbox = getValue('checkbox');
}
function getValue($inputName){
  return isset($_POST[$inputName]) ? $_POST[$inputName] : '';
}
function showDropdown($selectedValue) {
  $dropdown = [
    'default' => 'select one',
    'option1' => '1',
    'option2' => '2',
    'option3' => '3',
  ];
  foreach ($dropdown as $key => $value) {
    $selected = $selectedValue == $key ? 'selected' : '';
    echo "<option $selected value=$key>$value</option>";
  }
}

function validateName($username, $err) {
  if(isset($username)){
    return (strlen($username) > 2) ? '' : $err . '<br />';
  }
}
function validateOption($option, $errMsg){
  if(isset($option)){
    return (!empty($option) && $option != 'default') ? '' : $errMsg . '<br />';
  }
}
?>


<form id="loginForm" class="form-horizontal" method="post" action="">

  <div><?php
    echo validateName($username, 'invalid username');
    echo validateName($password, 'invalid password');
    echo validateOption($option, 'invalid radio button');
    echo validateOption($favNumber, 'invalid dropdown');
   ?></div>

  <!-- username -->
  <div class="form-group">
    <label for="username" class="col-sm-2 control-label">Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="username" name="username" placeholder="Username"
      value="<?php echo htmlspecialchars($username) ?>">
    </div>
  </div>
  <!-- password -->
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" name="password" placeholder="Password"
      value="<?php echo htmlspecialchars($password) ?>">
    </div>
  </div>
  <!-- drop down list -->
  <div class="form-group">
    <label for="favNumber" class="col-sm-2 control-label">Favourate Number</label>
    <div class="col-sm-10">
      <select id="favNumber" name="favNumber" class="form-control">
        <?php showDropdown($favNumber); ?>
      </select>
    </div>
  </div>

  <!-- radio buttons -->
  <div class="form-group">
    <label class="col-sm-2 control-label">Option</label>
    <?php
    foreach($radios as $index => $value){
      $selected = $option == $value ? 'checked' : '';
      echo "
      <label class='radio-inline'>
        <input $selected type='radio' name='option' id='inlineRadio" . "$index' value=$value>$value
      </label>";
    }
    ?>
  </div>

  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox" name="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" name="btnLogin" class="btn btn-default">Sign in</button>
    </div>
  </div>


</form>
