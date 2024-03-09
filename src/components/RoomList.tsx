import Image from 'next/image';
import React from 'react';

type RoomListProps = {

    roomID: number,
    roomName: string,
    roomLocation: string,
    roomPrice: number,
    roomCheckIn: number,
    roomCheckOut: number,
    roomRating: number,
    imageURL: string

}

const RoomList = (
    {
        roomID,
        roomName,
        roomLocation,
        roomPrice,
        roomCheckIn,
        roomCheckOut,
        roomRating,
        imageURL,
    }: RoomListProps) => {
    return (
        <div className='room-list'>
            <span className='room-list-name'>
                <Image
                    src={imageURL}
                    alt={roomName}
                    width={600}
                    height={550}
                />
                {roomName},
                {roomLocation}<br />
                ${roomPrice.toString()} per month<br />
                Rate: {roomRating.toString()}<br />
            </span>
        </div>
    )
}

export default RoomList;