import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from "remark-gfm";
import MenImage from '../../public/Men.png';
import Image from "next/image";
import { FaDatabase, FaGithub, FaHtml5, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import Link from "next/link";

export default function BlogPage() {
    const router = useRouter();
    const { slug } = router.query;

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            axios.get(`/api/getblog?slug=${slug}`).then(res => {
                setBlog(res.data);
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching blog:", error);
            });
        }
    }, [slug]);

    const Code = ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');
        const [copied, setCopied] = useState();

        //copy code function 
        const handleCopy = () => {
            navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000); // 3 seconds
        };

        if (inline) {
            return <code>
                {children}
            </code>
        } else if (match) {
            return (
                <div style={{ position: 'relative' }}>
                    <SyntaxHighlighter style={a11yDark} language={match[1]} PreTag="pre" {...props}
                        codeTagProps={{ style: { padding: "0", borderRadius: "5px", overflowX: 'auto', whiteSpace: 'pre-wrap' } }}>
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                    <button style={{
                        position: 'absolute', top: '0', right: '0', zIndex: "1",
                        background: "#3d3d3d", color: "#fff", padding: '10px'
                    }} onClick={handleCopy}>{copied ? 'Copied' : 'Copied'}</button>
                </div>
            )
        } else {
            return (
                <code className="md-post-code" {...props}>
                    {children}
                </code>
            )
        }


    };

    return (
        <div className="slugpage">
            <div className="container">
                <div className="topslug_titles">
                    <h1 className="slugtitle">
                        {loading ? <div>Loading...</div> : blog && blog[0]?.title}
                    </h1>
                    <h5>
                        By <span>Divyanshu Saini</span>. Published in <span>
                            {loading ? <div>Loading...</div> : blog && blog[0]?.blogcategory}
                        </span> on {blog && new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        <span>. 1 min read </span>
                    </h5>
                </div>
                <div className="flex flex-sb flex-left pb-5 flex-wrap">
                    <div className="leftblog_data_markdown">
                        {loading ?
                            <div className="wh_100 flex flex-center mt-3">
                                <div className="loader"></div>
                            </div>
                            : <>
                                <div className="w-100 blogcontent">
                                    <ReactMarkdown remarkPlugins={remarkGfm}
                                        components={{ code: Code, }}>
                                        {blog[0].description}
                                    </ReactMarkdown>
                                </div>
                            </>
                        }
                    </div>
                    <div className="rightslug_data">
                        <div className="slug_profile_info">
                            <div className="slugprofile_sec">
                                <div className="profile_imgbg"></div>
                                <div className="slug_profile_img">
                                    <div className="image_bg_top0"></div>
                                    <div className="image_bg_top1"></div>
                                    <Image src={MenImage} alt="image" />
                                </div>
                            </div>
                                <h3>Divyanshu Saini</h3>
                                <h4>Website Developer</h4>
                                <div className="social_talks flex flex-center gap-1 mt-2">
                                    <div className="st_icon">
                                        <FaGithub />
                                    </div>
                                    <div className="st_icon">
                                        <FaTwitter />
                                    </div>
                                    <div className="st_icon">
                                        <FaInstagram />
                                    </div>
                                </div>
                            
                        </div>
                        <div className="topics_sec">
                            <h2>Topics</h2>
                            <div className="topics_list">
                                <Link href='/topics/htmlcssjs'>
                                    <div className="topics">
                                        <div className="flex flex-center topics_svg">
                                            <FaHtml5 />
                                        </div>
                                        <h3>Html, Css And JavaScript</h3>
                                    </div>
                                </Link>
                                {/* second link */}
                                <Link href='/topics/nextjs'>
                                    <div className="topics">
                                        <div className="flex flex-center topics_svg">
                                            <TbBrandNextjs />
                                        </div>
                                        <h3>Next Js And React Js</h3>
                                    </div>
                                </Link>
                                {/* 3rd link */}
                                <Link href='/topics/database'>
                                    <div className="topics">
                                        <div className="flex flex-center topics_svg">
                                            <FaDatabase />
                                        </div>
                                        <h3>Database</h3>
                                    </div>
                                </Link>
                                {/* 4th link */}
                                <Link href='/topics/deployment'>
                                    <div className="topics">
                                        <div className="flex flex-center topics_svg">
                                            <AiOutlineDeploymentUnit />
                                        </div>
                                        <h3>Deployment</h3>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
