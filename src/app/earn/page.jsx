import Image from "next/image";
import { TaskDrawer } from "@/components/TaskDrawer";

function Tasks(){
    return(
        <>
            <div className="bg-lime-200 h-screen bg-gradient-to-b from-[#F7FFEB] via-[#E4FFBE] to-[#79B22A] fixed z-0 left-0 right-0 bottom-0 top-0 max-w-md mx-auto">
                <div className="px-5 pt-5">
                    <div className="rounded-t-2xl bg-blue-500 p-4">
                        <div className="py-3">
                            <div className="flex gap-2">
                                <div className="text-[15px] font-bold text-white">Tasks</div>
                            </div>
                            <div className="max-h-svh overflow-y-auto flex-grow py-2">
                                <div className="space-y-2 mb-28">
                                    <TaskDrawer title={'Tugas 1'}/>
                                    <TaskDrawer title={'Tugas 2'}/>
                                    <TaskDrawer title={'Tugas 3'}/>
                                    <TaskDrawer title={'Tugas 4'}/>
                                    <TaskDrawer title={'Tugas 5'}/>
                                    <TaskDrawer title={'Tugas 6'}/>
                                    <TaskDrawer title={'Tugas 1'}/>
                                    <TaskDrawer title={'Tugas 2'}/>
                                    <TaskDrawer title={'Tugas 3'}/>
                                    <TaskDrawer title={'Tugas 4'}/>
                                    <TaskDrawer title={'Tugas 5'}/>
                                    <TaskDrawer title={'Tugas 6'}/>
                                    <TaskDrawer title={'Tugas 1'}/>
                                    <TaskDrawer title={'Tugas 2'}/>
                                    <TaskDrawer title={'Tugas 3'}/>
                                    <TaskDrawer title={'Tugas 4'}/>
                                    <TaskDrawer title={'Tugas 5'}/>
                                    <TaskDrawer title={'Tugas 6'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tasks
