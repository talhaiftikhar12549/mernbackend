import mongooese from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: 
    {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
},
    {
        timestamps: true
    }
);

export const user = mongoose.model('user', userSchema);
