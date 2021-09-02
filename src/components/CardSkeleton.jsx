import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function CardSkeleton() {
    return (
        <SkeletonTheme color="#D1D5DB" highlightColor="#E5E7EB" >
            <div className="flex justify-between w-full p-1 bg-gray-50 h-48 overflow-hidden shadow-sm rounded-lg text-left ">
                <span className="m-0 pl-1">
                    <Skeleton width={150} height={172} duration={10} />
                </span>

                <div className="w-2/3">
                    <Skeleton width={310} height={20} duration={10} />
                    <Skeleton width={310} height={20} duration={10} />
                    <span className="mt-4 mb-1 flex flex-col ">
                        <Skeleton width={310} height={13} duration={10} />
                        <Skeleton width={310} height={13} duration={10} />
                    </span>
                    <Skeleton width={40} height={40} circle={true} duration={10} />

                </div>
            </div>
        </SkeletonTheme>
    )
}

export default CardSkeleton
