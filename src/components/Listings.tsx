"use client";
import { useRouter } from 'next/navigation';
export default function Listings() {
    const router = useRouter();

    const listings = [
        {
            id: 0,
            name: "Rover",
            image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
            age: 2,
            breed: "Golden Retriever"
        },
        {
            id: 1,
            name: "Spots",
            image: "https://www.dogster.com/wp-content/uploads/2024/03/Dalmatian-puppy_Annette-Kurka_Shutterstock.jpg",
            age: 1,
            breed: "Dalmation"
        },
        {
            id: 2,
            name: "Teacup",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pomeranian.JPG/330px-Pomeranian.JPG",
            age: 4,
            breed: "Pomeranian"
        },
        {
            id: 3,
            name: "Tucker",
            image: "https://oregonbordoodles.com/wp-content/uploads/timber-2.jpg",
            age: 4,
            breed: "Border Collie"
        },
        {
            id: 4,
            name: "Linus",
            image: "/Linus_pic.jpg",
            age: 9,
            breed: "Cavalier King Charles Spaniel"
        }
    ];
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {listings.map((listing) => (
                <div
                    key={listing.id}
                    className="border rounded-lg p-6 shadow-md w-80 text-center bg-white"
                >
                    <h1 className="text-xl font-bold mb-2 text-black">{listing.name}</h1>
                    <img
                        src={listing.image}
                        alt={`${listing.name} image`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-700">Breed: {listing.breed}</p>
                    <p className="text-gray-600 mb-4">Age: {listing.age} years</p>
                    <button
                        onClick={() => router.push(`/details/${listing.id}`)}
                        className="px-4 py-2 bg-lime-700 text-white rounded hover:bg-blue-600 transition"
                    >
                        Learn More!
                    </button>
                </div>
            ))}
        </div>
    );
}
