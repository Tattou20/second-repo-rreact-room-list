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
                {roomID.toString()}<br />
                {roomName}<br />
                {roomLocation}<br />
                {roomPrice.toString()}<br />
                {roomCheckIn.toString()}<br />
                {roomCheckOut.toString()}<br />
                {roomRating.toString()}<br />
                {imageURL}
                <Image
                    src={imageURL}
                    alt={roomName}
                    width={750}
                    height={700}
                />
                <br /><br />
            </span>
        </div>
    )
}

export default RoomList;