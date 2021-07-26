import React from 'react';

export default function Trending() {
    return (
        <main className="bg-gray-800 min-h-screen mx-auto my-auto">
            <section className="container mx-auto py-10">
                <h1 className="flex justify-center text-3xl">Trending</h1>
                <p className="flex justify-center py-3 tracking-wide">See what the GitHub community is most excited about today.</p>
            </section>
            <section className="container mx-auto bg-gray-700 rounded-md border border-gray-900">
                {/* header div */}
                <div className="flex justify-between">
                    <div>
                        <div className="p-2">
                            <button type="button" className="rounded-l-lg bg-blue-600 py-2 pl-4 pr-2">Repositories</button>
                            <button type="button" className="rounded-r-lg bg-blue-600 py-2 pr-4 pl-2">Developers</button>
                        </div>
                    </div>
                    <div></div>
                </div>

                {/* trending list */}
                <div></div>
            </section>
        </main>
    );
}