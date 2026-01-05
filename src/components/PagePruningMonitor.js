"use client";

import { useState, useEffect } from 'react';
import { AlertTriangle, TrendingDown, Eye, EyeOff } from 'lucide-react';

/**
 * Page Pruning Monitor Component (Protocol 5: Dashboard)
 *
 * Displays pages that need attention based on performance metrics
 * Integrate with GA4 API in production for real-time data
 */
export default function PagePruningMonitor() {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In production: Fetch from /api/pruning-status (GA4 integration)
        // For now: Load from generated report
        fetch('/logs/pruning-report.json')
            .then(res => res.json())
            .then(data => {
                setPages(data.recommendations || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load pruning report:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="animate-pulse">
                    <div className="h-4 bg-neutral-200 rounded w-1/4 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-neutral-100 rounded"></div>
                        <div className="h-3 bg-neutral-100 rounded"></div>
                        <div className="h-3 bg-neutral-100 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    const stats = {
        dead: pages.filter(p => p.action === '410_GONE').length,
        noindex: pages.filter(p => p.action === 'NOINDEX').length,
        observe: pages.filter(p => p.action === 'OBSERVE').length,
    };

    return (
        <div className="bg-white rounded-xl border border-neutral-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    Page Pruning Monitor
                </h3>
                <span className="text-xs text-neutral-400">
                    Protocol 5: Ecosystem Metabolism
                </span>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                    <div className="flex items-center gap-2 mb-1">
                        <TrendingDown className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-medium text-red-700 uppercase">Dead</span>
                    </div>
                    <div className="text-2xl font-bold text-red-900">{stats.dead}</div>
                    <div className="text-xs text-red-600 mt-1">0 impressions, 6mo</div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                    <div className="flex items-center gap-2 mb-1">
                        <EyeOff className="w-4 h-4 text-yellow-600" />
                        <span className="text-xs font-medium text-yellow-700 uppercase">Noindex</span>
                    </div>
                    <div className="text-2xl font-bold text-yellow-900">{stats.noindex}</div>
                    <div className="text-xs text-yellow-600 mt-1">Keep users, hide Google</div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                        <Eye className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700 uppercase">Observe</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900">{stats.observe}</div>
                    <div className="text-xs text-blue-600 mt-1">Monitor 3 more months</div>
                </div>
            </div>

            {/* Action List */}
            <div className="space-y-2">
                {pages.map((page, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                            page.action === '410_GONE'
                                ? 'bg-red-50 border-red-100'
                                : page.action === 'NOINDEX'
                                ? 'bg-yellow-50 border-yellow-100'
                                : 'bg-blue-50 border-blue-100'
                        }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <code className="text-sm font-mono text-neutral-700">
                                        {page.path}
                                    </code>
                                    <span
                                        className={`px-2 py-0.5 text-xs font-medium rounded ${
                                            page.priority === 'HIGH'
                                                ? 'bg-red-100 text-red-700'
                                                : page.priority === 'MEDIUM'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-blue-100 text-blue-700'
                                        }`}
                                    >
                                        {page.priority}
                                    </span>
                                </div>
                                <p className="text-xs text-neutral-600">{page.reason}</p>
                            </div>
                            <button
                                className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${
                                    page.action === '410_GONE'
                                        ? 'bg-red-600 text-white border-red-600 hover:bg-red-700'
                                        : page.action === 'NOINDEX'
                                        ? 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-700'
                                        : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                                }`}
                                onClick={() => {
                                    // In production: Execute action via API
                                    console.log(`Execute ${page.action} on ${page.path}`);
                                }}
                            >
                                {page.action.replace('_', ' ')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {pages.length === 0 && (
                <div className="text-center py-8 text-neutral-400">
                    <Eye className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>All pages are healthy! No pruning needed.</p>
                </div>
            )}

            <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <p className="text-xs text-neutral-600">
                    <strong>💡 Protocol 5:</strong> Automatically identifies pages with 0 traffic/impressions
                    for 6+ months. Dead pages waste crawl budget and dilute site authority. Review monthly
                    and execute actions to maintain a healthy ecosystem.
                </p>
            </div>
        </div>
    );
}
