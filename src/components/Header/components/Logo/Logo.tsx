type LogoProps = {
    readonly imgSrc: string;
};

export default function Logo({ imgSrc }: LogoProps) {
    return <img src={imgSrc} alt="Header logo" />;
}
