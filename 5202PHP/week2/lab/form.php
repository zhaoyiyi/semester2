<form id="loginForm" class="form-horizontal" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'] ) ?>">
  <!-- username -->
  <div class="form-group">
    <label for="username" class="col-sm-2 control-label">Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="username" name="username" placeholder="Username">
    </div>
  </div>
  <!-- password -->
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" name="password" placeholder="Password">
    </div>
  </div>
  <!-- drop down list -->
  <div class="form-group">
    <label for="favNumber" class="col-sm-2 control-label">Favourate Number</label>
    <div class="col-sm-10">
      <select id="favNumber" name="favNumber" class="form-control">
        <option value="default">select one</option>
        <option value="number 1">1</option>
        <option value="number 2">2</option>
        <option value="number 3">3</option>
      </select>
    </div>
  </div>
  <!-- radio buttons -->
  <div class="form-group">
    <label class="col-sm-2 control-label">Option</label>
    <label class="radio-inline">
      <input type="radio" name="option" id="inlineRadio1" value="option1"> 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="option" id="inlineRadio2" value="option2"> 2
    </label>
    <label class="radio-inline">
      <input type="radio" name="option" id="inlineRadio3" value="option3"> 3
    </label>
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
