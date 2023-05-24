import Image from "next/image";
import GithubLogo from "@/components/icons/GithubIcon";

const UserCardInfo = () => {
    return (
        <article className="grid-areas rounded-xl bg-blue-900 p-2 text-white">
            <div className="section-logo h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 file:grid">
                <GithubLogo className="relative top-2 h-full w-full" />
            </div>
            <div className="section-title">
                <h2>The Octocat</h2>
                <p>@octocat</p>
            </div>
            <p className="section-date">Joined 25 Jan 2011</p>
            <p className="section-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                totam, earum labore molestiae sequi eos sunt recusandae, illo
                aperiam nihil, repudiandae perferendis ipsa veritatis velit
                officiis enim obcaecati incidunt adipisci!
            </p>
            <div className="section-number flex justify-around bg-blue-950">
                <article>
                    <p>Repos</p>
                    <p>8</p>
                </article>
                <article>
                    <p>Followers</p>
                    <p>3938</p>
                </article>
                <article>
                    <p>Following</p>
                    <p>9</p>
                </article>
            </div>
            <div className="section-social md:grid md:grid-cols-2">
                <article>
                    <i>Icono</i>
                    <p>San Francisco</p>
                </article>
                <article>
                    <i>Icono</i>
                    <p>San Francisco</p>
                </article>
                <article>
                    <i>Icono</i>
                    <p>San Francisco</p>
                </article>
                <article>
                    <i>Icono</i>
                    <p>San Francisco</p>
                </article>
            </div>
        </article>
    );
};

export default UserCardInfo;
