import { AuthController } from "./authController.js";

class AuthView extends HTMLElement
{
    constructor(model)
    {
        super();
        this.innerController = model;
        this.innerController = new AuthController(this.innerController, this);

        this.formElement = document.createElement('form');
        this.formElement.id = 'loginContainer';
        this.formElement.method = 'post';

        this.usernameH1 = document.createElement('h1');
        this.usernameH1.id = 'Username';
        this.usernameH1.innerText = 'Username'

        this.usernameInput = document.createElement('input');
        this.usernameInput.className = 'InputBox1';
        this.usernameInput.type = 'text';
        this.usernameInput.name = 'username';
        this.usernameInput.id = 'username';
        this.usernameInput.placeholder = "Your username..."

        this.passwordH1 = document.createElement('h1');
        this.passwordH1.id = 'Password';
        this.passwordH1.innerText = 'Password'

        this.passwordInput = document.createElement('input');
        this.passwordInput.className = 'InputBox2';
        this.passwordInput.type = 'password';
        this.passwordInput.name = 'password';
        this.passwordInput.id = 'password';
        this.passwordInput.placeholder = "Your password..."

        this.submitBtn = document.createElement('button');
        this.submitBtn.id = 'LoginBtn';
        this.submitBtn.type = 'submit';
        this.submitBtn.innerText = 'Login';
        this.submitBtn.addEventListener('click', this.innerController.getData(
            this.usernameInput.value, this.passwordInput.value))

    }

    connectedCallback()
    {
        this.appendChild(this.formElement);

        this.formElement.appendChild(this.usernameH1);
        this.formElement.appendChild(this.usernameInput);
        this.formElement.appendChild(this.passwordH1);
        this.formElement.appendChild(this.passwordInput);
        this.formElement.appendChild(this.submitBtn);
    }

}

customElements.define('x-auth', AuthView)

export { AuthView }