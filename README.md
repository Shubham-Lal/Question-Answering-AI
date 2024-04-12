# Questions Answering AI

![](https://media.licdn.com/dms/image/C562DAQFZAz_SkntVYA/profile-treasury-image-shrink_800_800/0/1676553365612?e=1678903200&v=beta&t=cGduW4OBC27qi54IEKxCKc3qzEsaHxPVF4_ckeoQgko)

Question Answering AI Tool is Powerful Query replying tool powered by OPENAI and can be explicitly used to answer your questions.

<a href="https://www.buymeacoffee.com/lalshubham" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 140px !important;" ></a>

### Feel free to fork this repo and add some new features to it.

### Detailed set-up for both Frontend & Backend documented [here](https://github.com/CERTIFIED2003/question-answering-ai/issues/1).
# Setup

Step 1: Clone or Fork this repo.

### `BACKEND PART`

Step 2: Open your terminal in VsCode or any other software and navigate to this repo folder.

Step 3: Then execute `yarn` command on the terminal. This will install necessary backend dependencies mentioned in `package.json`.

Step 4: Create a new `.env` file in the same directory. Mentioned below are some environment variables which you have to create.

```
OPENAI_API_KEY = 'YOUR_OPENAI_KEY'
```

Step 5: After adding the above mentioned variables to your .env file execute `yarn dev` command. This will start local backend server on your local area network.

### `FRONTEND PART`

Step 6: Then open another terminal and navigate to `frontend` folder.

Step 7: Then execute `yarn` command on the terminal. This will install necessary frontend dependencies mentioned in `frontend/package.json`.

Step 8: Create a new `.env` file in the same directory. Mentioned below is the only environment variables which you have to create.

```
VITE_BACKEND_URL = http://localhost:8080
NODE_VERSION = 16.14.1 (Optional)
```

Step 9: After adding the above mentioned variable to your .env file execute `yarn dev` command. This will start local frontend server on your local area network.

### Snapshot of the application
![Project16](https://user-images.githubusercontent.com/111045472/225552712-b18db212-cfe5-4d44-bbcb-bba1fc3fcdb9.png)
