'use client';

import { useState } from "react";
import RoomList from '@/components/RoomList';
import Image from 'next/image';

function App(){
    const [roomList] = useState([
        {
            roomID: 1,
            roomName: 'Bachelor',
            roomLocation: 'Toronto',
            roomPrice: 1500,
            roomCheckIn:1/27/2024,
            roomCheckOut: 2/27/2024,
            roomRating: 4,
            imageURL: '/images/room1.png'
        },
        {
            roomID: 2,
            roomName: 'Suite',
            roomLocation: 'Ottawa',
            roomPrice: 1500,
            roomCheckIn:1/27/2024,
            roomCheckOut: 2/27/2024,
            roomRating: 4,
            imageURL: '/images/room2.jpg'
        },
    ]);

    return (
        <div>
            {roomList
                .map((r) => (
                    <RoomList
                        roomID={r.roomID}
                        roomName={r.roomName}
                        roomLocation={r.roomLocation}
                        roomPrice={r.roomPrice}
                        roomCheckIn={r.roomCheckIn}
                        roomCheckOut={r.roomCheckOut}
                        roomRating={r.roomRating}
                        imageURL={r.imageURL}
                    />
                ))
            }
        </div>
    );
}

export default App;
