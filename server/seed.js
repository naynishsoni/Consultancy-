require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Client = require('./models/Client');

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/consultancy_agency')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log(err));

const projects = [
    {
        name: "Future Tech Transformation",
        description: "A complete digital overhaul for a leading fintech company, implementing blockchain solutions and AI-driven analytics to boost efficiency by 40%.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Green Energy Initiative",
        description: "Strategic consulting for a renewable energy startup, helping them navigate regulatory landscapes and secure Series B funding.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Global Supply Chain Optimization",
        description: "Redesigning the logistics network for a multinational corporation, reducing carbon footprint and cutting costs by 25%.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Smart City Infrastructure",
        description: "Developing the framework for next-gen smart city projects, integrating IoT sensors with centralized data management.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Healthcare Systems Upgrade",
        description: "Modernizing patient record systems for a national hospital network to ensure compliance and improve patient outcomes.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Retail Experience Design",
        description: "Crafting omnichannel retail strategies for a top fashion brand, merging physical and digital shopping experiences.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
];

const clients = [
    {
        name: "Sarah Johnson",
        designation: "CTO, FinEdge",
        description: "ConsultAgency transformed our technical infrastructure. Their team is simply world-class. The efficiency gains we've seen are unprecedented.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Michael Chen",
        designation: "CEO, SolarRise",
        description: "We wouldn't be where we are today without their strategic guidance. They helped us secure funding when it mattered most.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Emily Davis",
        designation: "COO, GlobalLogistics",
        description: "Professional, insightful, and result-oriented. The ROI was evident from day one. I highly recommend their services.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

const seed = async () => {
    await Project.deleteMany({});
    await Client.deleteMany({});

    await Project.insertMany(projects);
    await Client.insertMany(clients);

    console.log('Data Seeded with Valid Images!');
    process.exit();
};

seed();
