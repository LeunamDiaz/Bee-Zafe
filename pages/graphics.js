import Calltoaction from "@/components/Calltoaction";
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";
import Sensor from "@/components/Sensor";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Demo() {

  return (
<div>
<div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="w-full max-w-3xl">
        <div class="-mx-2 md:flex">
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Temperatura</h4>
                            <p class="text-sm dark:text-gray-600">July 29</p>

                            <div class="rounded-md w-60   text-center relative bg-white dark:text-gray-800 ml-[45px]">
	<div class="text-center">
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-32 h-32 p-6 dark:text-yellow-600 fill-current">
		<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
		<rect width="32" height="48" x="240" y="16"></rect>
		<rect width="32" height="48" x="240" y="448"></rect>
		<rect width="48" height="32" x="448" y="240"></rect>
		<rect width="48" height="32" x="16" y="240"></rect>
		<rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
		<rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
		<rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
		<rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
	</svg>

</div>
<div class="mb-2 text-3xl font-semibold text-black">32°
		<span class="mx-1 font-normal">/</span>20°
	</div>
                            <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart1" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Peso</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                            <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart2" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Sonido</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">8,028</h3>
                            <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart3" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                        <div class="px-3 pt-8 pb-10 text-center relative z-10">
                            <h4 class="text-sm uppercase text-gray-500 leading-tight">Co2</h4>
                            <h3 class="text-3xl text-gray-700 font-semibold leading-tight my-3">8,028</h3>
                            <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                        </div>
                        <div class="absolute bottom-0 inset-x-0">
                            <canvas id="chart3" height="70"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

</div>
  );
}
