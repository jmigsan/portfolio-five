import DirectionalLink from "./components/DirectionalLink";
import LinkWrapper from "./components/LinkWrapper";
import AttributionTrigger from "./components/AttributionTrigger";

const Home = () => {
    return (
        <main className='isolate flex-1 flex flex-col p-12 sm:p-24 justify-between relative overflow-hidden text-amber-200'>
            <div
                aria-hidden='true'
                className='pointer-events-none fixed inset-0 z-0 bg-[#849dbd]'
            >
                <video
                    autoPlay
                    disablePictureInPicture
                    loop
                    muted
                    playsInline
                    poster='/road-poster.webp'
                    preload='metadata'
                    className='h-full w-full object-cover object-[center_74%]'
                >
                    <source src='/road.webm' type='video/webm' />
                    <source src='/road.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='relative z-10 flex justify-between text-xl sm:text-2xl'>
                <LinkWrapper>
                    <DirectionalLink
                        href='/about'
                        className='font-lora font-medium'
                    >
                        About Me
                    </DirectionalLink>
                </LinkWrapper>
                <LinkWrapper>
                    <DirectionalLink
                        href='/case-studies/hymndeck'
                        className='font-lora font-medium'
                    >
                        Case Studies
                    </DirectionalLink>
                </LinkWrapper>
            </div>
            <div className='relative z-10 flex flex-col items-center sm:gap-7 gap-5'>
                <p className='text-2xl sm:text-3xl font-lora font-medium'>
                    Juan Miguel Sanchez
                </p>
                <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center font-nacelle-black'>
                    I build full stack web apps
                    <br />
                    and deploy AI solutions
                </h1>
                <div className='flex flex-col items-center gap-2 text-center font-lora'>
                    <p className='text-base sm:text-lg font-medium tracking-wide'>
                        Next.js · FastAPI 
                        <span className='hidden sm:inline'> · TypeScript · Python </span>
                        {' '}· PostgreSQL · GCP
                    </p>
                    <DirectionalLink
                        href='/for-agencies'
                        direction='down'
                        className='relative inline-block max-w-full text-sm sm:text-base text-amber-100/90 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100'
                    >
                        Available for freelance and contract work · London /
                        remote
                    </DirectionalLink>
                </div>
            </div>
            <div className='relative z-10 flex justify-between text-xl md:text-2xl'>
                <LinkWrapper>
                    <DirectionalLink
                        href='/contact'
                        className='font-lora font-medium'
                    >
                        Work With Me
                    </DirectionalLink>
                </LinkWrapper>
                <AttributionTrigger />
            </div>
        </main>
    );
};

export default Home;
