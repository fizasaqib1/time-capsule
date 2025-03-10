<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="signup">
        <h1>Create Your Account</h1>
        <p>Sign up to preserve and share your memories with the future!</p>
        <form action="process.php" method="POST">
            <div class="forms">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Choose a username" required>
            </div>
            <div class="forms">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="forms">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Create a password" required>
            </div>
            <div class="forms">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter your password" required>
            </div>
            <div class="forms">
                <button type="submit" name="submit" value="submit" class="btn-submit">Sign Up</button>
            </div>
        </form>
        <p>Already have an account? <a href="login.html">Log in</a></p>
    </div>
</body>
</html>
