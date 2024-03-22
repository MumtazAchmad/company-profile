export const metadata = {
    title: "Products",
    description: "ZOOMODIFICATION Products",
};

export default function ModProducts(){
    return(
        <>
            <div className="pb-[150px] pt-[64px]">
                <h1 className="text-center text-bold text-5xl mb-8 mt-8"> Modification Products </h1>
                <div className="grid grid-cols-2 gap-4 size-fit">
                    <div className="w-full">
                        <img src="./Bodykit.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Body Kit</h1>
                        <p> One of the most popular exterior modifications. Body kits include front and rear bumpers, side skirts, spoilers, and other aerodynamic additions to enhance the car's appearance and aerodynamic performance.</p>
                        <img src="./suspenssion.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Suspension</h1>
                        <p>Suspension modifications can include using coilovers, lowering springs, strut bars, and sway bars to improve handling, steering response, and ride comfort.</p>
                        <img src="./VelgMobil.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Wheels</h1>
                        <p>Replacing stock wheels and tires with larger, lighter, and visually appealing ones can enhance the car's appearance as well as improve handling and grip performance.</p>
                        <img src="./knalpot.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Exhaust</h1>
                        <p> Upgrading the stock exhaust system with an aftermarket one that is larger, has better airflow, and produces a sportier sound can improve engine performance and provide a sportier feel.</p>
                        <img src="./MesinMobil.jpg" className="border-4 border-black 2-full h-auto"/>
                        <h1 className="text-center text-bold text-3xl">Engine Modification</h1>
                        <p>Upgrading the engine and tuning the Electronic Control Unit (ECU) can increase power, torque, and engine response. This can be done by replacing components such as intake, exhaust, turbocharger, and performing ECU remapping.</p>
                    </div>
                    <div className="w-full">
                        <img src="./interior.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Car Interior</h1>
                        <p> Interior modifications include replacing seats, dashboard, door panels, and adding features like a more advanced audio system, navigation system, and other comfort features.</p>
                        <img src="./brake.jpg" className="border-4 border-black w-full h-auto"/>
                        <h1 className="text-center text-bold text-3xl">Brake System</h1>
                        <p>Upgrading the braking system with performance brakes, larger disc brakes, and more responsive calipers can improve braking performance and safety.</p>
                        <img src="./chassis1.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Chassis Reinforcement</h1>
                        <p>To increase chassis rigidity and stability, modifications such as strut tower bars, roll cages, and chassis braces can be considered.</p>
                        <img src="./CarPaintModification.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Car Looks Modification</h1>
                        <p>Other aesthetic modifications include vinyl wrapping, decals, custom paint jobs, and small details to give a unique and personalized look to the car.</p>
                        <img src="./Spoiler.jpg" className="border-4 border-black w-full h-auto" />
                        <h1 className="text-center text-bold text-3xl">Spoiler</h1>
                        <p>Spoilers are designed to improve the aerodynamics of a car by reducing drag and increasing downforce. This can help improve stability at high speeds and enhance overall handling and cornering performance.</p>
                    </div>
                </div>
            </div>

        </>
    )
}