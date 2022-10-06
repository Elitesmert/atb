import React, { useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { ImExit } from "react-icons/im"
import { db } from "../config/firebase"
import { addDoc, collection, getDocs, setDoc } from "firebase/firestore"
import Table from "./Table"
import RankCard from "./RankCard"

const Dashboard = () => {
  const { userInfo, currentUser } = useAuth()
  const [newRank, setNewRank] = useState(false)
  const [rankList, setRankList] = useState({})
  const [rank, setRank] = useState("")
  const userCollectionRef = collection(db, "rank")

  console.log(rankList)

  const createRank = async () => {
    await addDoc(userCollectionRef, {
      rankName: newRank,
    })
  }

  async function handleAddNewRank() {
    if (!rank) {
      return
    }
    const newKey =
      Object.keys(rankList).length === 0
        ? 1
        : Math.max(...Object.keys(rankList)) + 1
    setRankList({ ...rankList, [newKey]: rank })
    setRank("")
    const userRef = collection(db, "rank", currentUser.uid)
    await setDoc(userRef, {
      "ranks": { [newKey]: rank },
    }, { merge: true })
  } 
  const { logout } = useAuth()
  return (
    <div className="relative w-full bg bg-red-500 ">
      <div className="bg-red-300 relative h-screen mt-20 box-border mx-[10%]">
        <button
          onClick={logout}
          className="flex items-center absolute top-5 right-5 text-lg duration-300 transition-all hover:text-red-400"
        >
          <ImExit className="mr-1" />
          Cikis
        </button>
        <div className="denemee absolute w-full mt-10">
          <input
            type="text"
            onChange={event => {
              setRank(event.target.value)
            }}
          />

          <button onClick={handleAddNewRank}> Ekle</button>
          <div>
            {userInfo && (
              <>
                {Object.keys(rankList).map((rank, i) => {
                  return <RankCard key={i}>{rankList[rank]}</RankCard>
                })}
              </>
            )}
          </div>
          <div className="hidden justify-center">
            <div className="mb-3 xl:w-96">
              <select
                placeholder="asd"
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Rütbe Seç</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
