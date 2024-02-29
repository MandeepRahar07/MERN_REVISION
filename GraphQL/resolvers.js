import {quotes,users} from './fakedb.js'
import {randomBytes} from 'crypto'
import mongoose from 'mongoose'
const User  = mongoose.model("User")
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js';

const resolvers = {
    Query:{
       users:()=>users,
       user:(_,{_id})=>users.find(user=>user._id == _id),
       quotes:()=>quotes,
       iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by == ur._id)
    },
    Mutation:{
        signupUser:async (_,{userNew})=>{
          const user = await User.findOne({email:userNew.email})
          if(user){
              throw new Error("User already exists with that email")
          }
         const hashedPassword =  await bcrypt.hash(userNew.password,12)

        const newUser =  new User({
             ...userNew,
             password:hashedPassword
         })
        return await newUser.save()
        },
        signinUser: async (_, { userSignin }) => {
            // Find user by email in the database
            const user = await User.findOne({ email: userSignin.email });
          
            // If user does not exist, throw an error
            if (!user) {
              throw new Error("User doesn't exist with that email");
            }
          
            // Compare the provided password with the hashed password in the database
            const doMatch = await bcrypt.compare(userSignin.password, user.password);
          
            // If passwords don't match, throw an error
            if (!doMatch) {
              throw new Error("Email or password is invalid");
            }
          
            // If everything is correct, generate a JWT token
            const token = jwt.sign({ userId: user._id }, JWT_SECRET);
          
            // Return the token
            return { token };
          },
          
    }
}

export default resolvers