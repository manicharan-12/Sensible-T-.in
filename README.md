# Transaction Management API

This is a simple **Transaction Management API** built with **Node.js**, **Express.js**, and **MongoDB**. The API supports operations like creating transactions, viewing transaction history, and updating transaction statuses.

## **Live Demo**

The API is deployed and accessible at the following public URL:  
**[https://sensible-t-in.onrender.com](https://sensible-t-in.onrender.com)**

## **API Documentation**

### **Base URL**  
`https://sensible-t-in.onrender.com`

### **Endpoints**

1. **Create a New Transaction**
   - **POST** `/api/transactions/`
   - **Request Body**:  
     ```json
     {
       "amount":1212,
       "transaction_type":"DEPOSIT",
       "user":"64bdf97b4a9f5c001c8c8a9f"
     }
     ```
   - **Response**:  
     ```json
     {
       "transaction_id": "673c45c3b36008bd496bbbbf",
       "amount": 1212,
       "transaction_type": "DEPOSIT",
       "status": "PENDING",
       "user": "64bdf97b4a9f5c001c8c8a9f",
       "timestamp": "2024-11-19T08:01:07.026Z"
     }
     ```

2. **Retrieve All Transactions for a User**
   - **GET** `/api/transactions/?user_id=<user_id>`
   - **Response**:  
     ```json
     {
       "transactions": [
         {
           "transaction_id": "673c253a170efc92120695e0",
           "amount": 1500,
           "transaction_type": "DEPOSIT",
           "status": "COMPLETED",
           "timestamp": "2024-11-19T05:42:18.619Z"
         },
         ...
       ]
     }
     ```

3. **Update Transaction Status**
   - **PUT** `/api/transactions/<transaction_id>/`
   - **Request Body**:  
     ```json
     {
       "status": "COMPLETED"
     }
     ```
   - **Response**:  
     ```json
     {
       "transaction_id": "673c45c3b36008bd496bbbbf",
       "amount": 1212,
       "transaction_type": "DEPOSIT",
       "status": "COMPLETED",
       "timestamp": "2024-11-19T08:01:07.026Z"
     }
     ```

4. **Retrieve a Specific Transaction**
   - **GET** `/api/transactions/<transaction_id>/`
   - **Response**:  
     ```json
     {
       "transaction_id": "673c45c3b36008bd496bbbbf",
       "amount": 1212,
       "transaction_type": "DEPOSIT",
       "status": "COMPLETED",
       "timestamp": "2024-11-19T08:01:07.026Z"
     }
     ```
     
## **Project Setup**

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-repo/transaction-management-api.git](https://github.com/manicharan-12/Sensible-T-.in.git)
   cd Sensible-T-.in
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/transactions?retryWrites=true&w=majority
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   
## **Testing with Insomnia**

To test the API, **Insomnia** was used to simulate API requests. Below are the screenshots:  

1. **Creating a Transaction**:  
   ![Create Transaction](https://res.cloudinary.com/djovsq3xl/image/upload/v1732004416/Screenshot_2024-11-19_134729_trindd.png)

2. **Fetching All Transactions for a User**:  
   ![Get All Transactions](https://res.cloudinary.com/djovsq3xl/image/upload/v1732004416/Screenshot_2024-11-19_134744_h1tn4i.png)

3. **Updating Transaction Status**:  
   ![Update Transaction](https://res.cloudinary.com/djovsq3xl/image/upload/v1732004416/Screenshot_2024-11-19_134729_trindd.png)

4. **Fetching a Specific Transaction**:  
   ![Get Specific Transaction](https://res.cloudinary.com/djovsq3xl/image/upload/v1732004416/Screenshot_2024-11-19_134811_xvgs5z.png)

## **SonarQube Test Results**

SonarQube was used to test the code quality and identify potential bugs, code smells, and vulnerabilities. Below is the screenshot of the test report:  

![SonarQube Test Results](https://res.cloudinary.com/djovsq3xl/image/upload/v1732004416/Screenshot_2024-11-19_132426_vo2o3d.png)

## **Live Recording**

A live recording showcasing the testing of the API using Insomnia is available at:  
**[Live Recording Link](https://www.loom.com/share/290d9633be3645b4838a07c5c0fc6dbb?sid=0b825cc5-073d-4cbf-ba26-8967fcfcf991)**

## **Deployment**

The API is deployed on **Render**. Steps followed for deployment:  
1. Push the code to a GitHub repository.  
2. Connect the repository to **Render**.  
3. Add environment variables (`PORT` and `MONGO_URI`) in the dashboard.  
4. Deploy the app to make it publicly accessible.  

---

## **Tech Stack**
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Tools**: Insomnia for API testing, SonarQube for code quality analysis  
