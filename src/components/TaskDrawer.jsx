export const TaskDrawer = ({title}) => {
    return(
    <div class="flex items-start justify-between gap-2 rounded-lg mt-5 px-4 py-3 font-montserrat text-white">
        <div class="space-y-1">
            <div class="text-pretty text-[14px]">{title}</div>
            <div class="flex items-center gap-1 text-[13px]">
                <span>+</span>
                <span>500</span>
            </div>
        </div>
        <div class="flex min-w-16 items-center justify-center rounded-3xl text-xs font-bold active:brightness-50 bg-white text-black">
            <button class="w-full p-2">Check</button>
        </div>
    </div>
    )
}