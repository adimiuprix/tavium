"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import moment from 'moment';
import { TaskDrawer } from "@/components/TaskDrawer";

export default function Home() {
  const [user, setUser] = useState(null); // define variable user state
  const speed = user?.mining_speed; // speed per second
  const [balance, setBalance] = useState(0);  // balance

  const balanceUserNow = user?.balance;   // balance user from database
  const lastMining = user?.last_mining; // last mining time from database
  const timeNow = moment(); // time now
  const diffInSeconds = timeNow.diff(lastMining, 'seconds');  // distance between timenow - last_time (second)
  const balanceTime = diffInSeconds * speed // result from "diffInSeconds" * mining speed
  const balanceOnLoad = balanceUserNow + balanceTime || 0

  // Fetch profile info
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch('/api/user_info');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUser(data);
    };
    fetchUserInfo();
  }, []);

  const sendBalanceNowToAPI = async (newBalance) => {
    await fetch('/api/send_balance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ balance: newBalance }),
    });
  };

  // balance incrementing
  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(balanceOnLoad => {
        const newBalance = balanceOnLoad + parseFloat(speed) || 0;
        sendBalanceNowToAPI(newBalance);
        return newBalance;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  // unLoad handler
  useEffect(() => {
    const handleBeforeUnload = () => {
      navigator.sendBeacon('/api/user_update_last_mining');
      navigator.sendBeacon('/api/update_balance_onclose');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className="bg-lime-200 h-screen bg-gradient-to-b from-[#F7FFEB] via-[#E4FFBE] to-[#79B22A] fixed z-0 left-0 right-0 bottom-0 top-0 max-w-md mx-auto">
        <div className="px-4 pt-4">
            <div className="flex flex-col p-5 rounded-t-lg bg-blue-500 font-montserrat text-white">
              <div className="my-4 flex justify-center">
                <div className="flex h-[125px] w-[148px] justify-center">
                  <Image className="pointer-events-none" src={'/logo.webp'} alt={'money dogs'} loading={'lazy'} width={'250'} height={'100'} decoding="async" />
                </div>
              </div>
              <div className="flex flex-wrap justify-center pl-1 text-4xl font-bold">
                {balanceOnLoad.toLocaleString()}
              </div>

              <p className="mt-1 text-center text-2xl font-bold">POINT</p>

              <div className="bg-black mx-2 mt-2 flex items-center justify-between rounded-lg px-4 py-3">
                <p className="text-sm font-bold text-white">Speed mining:</p>
                <p className="text-sm font-bold text-white">{speed} per second</p>
              </div>
            </div>

            <div className="mt-2 p-4 bg-blue-500 rounded-t-lg">
                <div className="py-3">
                    <div className="flex gap-2">
                        <div className="text-[15px] font-bold text-white mb-3">Tasks</div>
                    </div>

                    <div className="max-h-svh overflow-y-auto flex-grow py-2">
                        <div className="space-y-2 mb-30">
                            <TaskDrawer title={'Tugas 1'}/>
                            <TaskDrawer title={'Tugas 2'}/>
                            <TaskDrawer title={'Tugas 3'}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
