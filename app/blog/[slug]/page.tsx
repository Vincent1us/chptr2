import { blogPosts } from '../../data/root/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';


interface Params {
 slug: string;
}


export default function BlogPostPage({ params }: { params: Params }) {
 const post = blogPosts.find(post => post.slug === params.slug);


 if (!post) {
   return <div>Post not found</div>;
 }


 return (
   <div className="container mx-auto">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
       <Link href="/blog" className="inline-block mb-6 text-soft-brown hover:underline">
         ← Back to Blog
       </Link>
      
       <h1 className="text-3xl font-bold mb-4 text-soft-brown">{post.title}</h1>
       <p className="text-white text-sm font-bold mb-4">{post.date}</p>
       <ReactMarkdown>{post.content}</ReactMarkdown>
       </div>
   </div>
 );
}
