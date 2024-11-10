"use client";
import useDiscussionStore from "@hertechquest/store/discussionStore";
import { useEffect, useState } from "react";

const TestDiscussionPage = () => {
    const { discussions, fetchDiscussions } = useDiscussionStore();
    const [loading, setLoading] = useState(true);
    const [recommendedTags, setRecommendedTags] = useState<Set<string>>(new Set());

    useEffect(() => {
        const fetchAllDiscussions = async () => {
            setLoading(true);
            try {
                await fetchDiscussions("");
            } catch (error) {
                console.error("Error fetching discussions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllDiscussions();
    }, [fetchDiscussions]);

    useEffect(() => {
        const updateRecommendedTags = () => {
            const uniqueTags = new Set<string>();
            discussions.data?.forEach((discussion: Discussion) => {
                discussion.tags?.forEach((tag) => {
                    uniqueTags.add(tag.title);
                });
            });
            setRecommendedTags(uniqueTags);
        };

        if (discussions.data) {
            updateRecommendedTags();
        }
    }, [discussions]);

    return (
        <div className="container mx-auto py-6">
            {loading ? (
                <p>Loading discussions...</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-1">
                        <h2 className="text-xl font-bold mb-4">Recommended Topics</h2>
                        <ul>
                            {Array.from(recommendedTags).map((tag) => (
                                <li key={tag} className="mb-2">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            See More Topics
                        </button>
                    </div>

                    <div className="lg:col-span-3">
                        <h2 className="text-xl font-bold mb-4">Discussions</h2>
                        <div className="space-y-4">
                            {discussions.data && discussions.data.length > 0 ? (
                                discussions.data.map((discussion) => (
                                    <div key={discussion._id} className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="text-lg font-semibold">{discussion.title}</h3>
                                        <p className="text-gray-600">{discussion.content}</p>
                                        <div className="flex items-center mt-2">
                                            {discussion.tags ? discussion.tags.map(tag => tag.title).join(', ') : ""}                                            <span className="text-sm text-gray-500 ml-2">•</span>
                                        </div>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                            See More
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No discussions available.</p>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h2 className="text-xl font-bold mb-4">People to Follow</h2>
                        <p className="text-gray-500">Feature coming soon.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestDiscussionPage;
