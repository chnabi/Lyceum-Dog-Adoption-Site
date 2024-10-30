// src/app/details/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";

const listings = [
    {
        id: 0,
        name: "Rover",
        image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
        age: 2,
        breed: "Golden Retriever",
        price: "$500",
        description: "Friendly and energetic, perfect for families.",
    },
    {
        id: 1,
        name: "Spots",
        image: "https://www.dogster.com/wp-content/uploads/2024/03/Dalmatian-puppy_Annette-Kurka_Shutterstock.jpg",
        age: 1,
        breed: "Dalmatian",
        price: "$300",
        description: "Playful and loves attention.",
    },
    {
        id: 2,
        name: "Teacup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pomeranian.JPG/330px-Pomeranian.JPG",
        age: 4,
        breed: "Pomeranian",
        price: "$1000",
        description: "Very fluffy"
    },
    {
        id: 3,
        name: "Tucker",
        image: "https://oregonbordoodles.com/wp-content/uploads/timber-2.jpg",
        age: 4,
        breed: "Border Collie",
        price: "$600",
        description: "Super active"
    },
    {
        id: 4,
        name: "Not Rover",
        image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
        age: 2,
        breed: "Golden Retriever",
        price: "$200",
        description: "Good boy"
    }
];

export default function DetailsPage() {
    const { id } = useParams();
    const listing = listings.find((item) => item.id === Number(id));

    if (!listing) {
        return <p>Listing not found!</p>;
    }

    return (
        <div className="p-6 bg-lime-50">
            <h1 className="text-3xl font-bold mb-4 text-black">{listing.name}</h1>
            <img
                src={listing.image}
                alt={`${listing.name} image`}
                className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-xl">Breed: {listing.breed}</p>
            <p className="text-gray-600">Age: {listing.age} years</p>
            <p className="text-gray-600">Price: {listing.price}</p>
            <p className="text-gray-600 mb-4">Description: {listing.description}</p>
        </div>
    );
}
