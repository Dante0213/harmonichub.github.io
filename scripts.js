document.addEventListener('DOMContentLoaded', () => {
    console.log('Document ready');
    // Add JavaScript functionalities here
});

// AWS Cognito 사용자 인증
async function signIn() {
    const username = prompt("Enter your username");
    const password = prompt("Enter your password");

    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password
    });

    const poolData = {
        UserPoolId: 'YOUR_USER_POOL_ID',
        ClientId: 'YOUR_APP_CLIENT_ID'
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const userData = { Username: username, Pool: userPool };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
            console.log('Access token + ' + result.getAccessToken().getJwtToken());
            alert('Sign in successful');
        },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        }
    });
}

// Stripe 결제
async function makePayment() {
    const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
    const { error } = await stripe.redirectToCheckout({
        sessionId: 'YOUR_SESSION_ID'
    });

    if (error) {
        console.error('Payment error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document ready');
    // Add JavaScript functionalities here
});

// AWS Cognito 사용자 인증
async function signIn() {
    const username = prompt("Enter your username");
    const password = prompt("Enter your password");

    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password
    });

    const poolData = {
        UserPoolId: 'YOUR_USER_POOL_ID',
        ClientId: 'YOUR_APP_CLIENT_ID'
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const userData = { Username: username, Pool: userPool };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
            console.log('Access token + ' + result.getAccessToken().getJwtToken());
            alert('Sign in successful');
        },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        }
    });
}

// Stripe 결제
async function makePayment() {
    const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
    const { error } = await stripe.redirectToCheckout({
        sessionId: 'YOUR_SESSION_ID'
    });

    if (error) {
        console.error('Payment error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document ready');
    // Add JavaScript functionalities here
});

// AWS Cognito 사용자 인증
async function signIn() {
    const username = prompt("Enter your username");
    const password = prompt("Enter your password");

    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password
    });

    const poolData = {
        UserPoolId: 'YOUR_USER_POOL_ID',
        ClientId: 'YOUR_APP_CLIENT_ID'
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const userData = { Username: username, Pool: userPool };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
            console.log('Access token + ' + result.getAccessToken().getJwtToken());
            alert('Sign in successful');
        },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        }
    });
}

// Stripe 결제
async function makePayment() {
    const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
    const { error } = await stripe.redirectToCheckout({
        sessionId: 'YOUR_SESSION_ID'
    });

    if (error) {
        console.error('Payment error:', error);
    }
}

