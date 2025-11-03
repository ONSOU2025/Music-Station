// --- MUSIC PLAYER LOGIC (音楽プレイヤーロジック) ---

const audio = new Audio();
let currentTrackIndex = 0;
let isPlaying = false;

// 音楽データ (ダミーデータ。ご自身の楽曲情報とURLに置き換えてください)
const trackList = [
    { 
        title: 'Lily Waltz',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:58',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Lily Waltz.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Lily Waltz.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '音奏初めてのオリジナル楽曲です。'
    },
    { 
        title: 'Rhythmic Pulse',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:38',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Rhythmic Pulse.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Rhythmic Pulse.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '音奏旧階段楽曲。'
    },
    { 
        title: 'Aura Cadenza',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:22',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Aura Cadenza.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Aura Cadenza.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '音奏最長のボス曲です。'
    },
    { 
        title: 'Eternity',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:23',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Eternity.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Eternity.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '比較的難易度が高く、上級者の練習として使われる曲です。'
    },
    { 
        title: 'Emberbloom',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:11',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Emberbloom.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Emberbloom.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'はすにねこ',  //譜面制作者
        description: 'MASTERよりRe MASTERの方がなぜか簡単な曲です。'
    },
    { 
        title: '音奏',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:07',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/音奏.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/音奏.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: 'MASTERまでは優しめの難易度で、乱打が多用されている。メインテーマでもある。'
    },
    { 
        title: 'Incandescence',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:00',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Incandescence.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Incandescence.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: '大福モドキ',  //譜面制作者
        description: '旧階段に代わる現階段楽曲です。'
    },
    { 
        title: 'Σετςυиαι  ERROR ; 404',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:50',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Σετςυиαι  ERROR ; 404.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Σετςυиαι ERROR ; 404.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '数少ないLUNATIC楽曲の1つで、圧倒的な乱打で圧倒してきます。'
    },
    { 
        title: '焔ノ迷宮',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:18',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/焔ノ迷宮.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/焔ノ迷宮.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'はすにねこ',  //譜面制作者
        description: '迷宮シリーズ第1弾。'
    },
    { 
        title: '冰ノ迷宮',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '3:20',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/冰ノ迷宮.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/冰ノ迷宮.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'はすにねこvsカンキツ',  //譜面制作者
        description: '迷宮シリーズ第2弾。'
    },
    { 
        title: 'Block',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '3:45',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Block.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Block.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '初心者から中級者にお勧めの譜面難易度です。'
    },
    { 
        title: 'β',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:09',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/β.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/β.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツvsはすにねこ',  //譜面制作者
        description: 'βからαへB,N,A,E,M,R,L,A総合イベント準ボス曲。'
    },
    { 
        title: 'σ',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:35',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/σ.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/σ.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'はすにねこvsカンキツ',  //譜面制作者
        description: 'βからαへB,N,A,E,M,R,L,A総合イベントボス曲。'
    },
    { 
        title: 'os-103',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '1:10',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/os-103.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/os-103.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: null,  //譜面制作者
        description: '音奏書き下ろしだが、とある都合で没曲となった。'
    },
    { 
        title: '1w1',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:54',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/1w1.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/1w1.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: null,  //譜面制作者
        description: '音奏書き下ろしだが、とある都合で没曲となった。'
    },
    { 
        title: 'ACCEL_ZERO_1.0',  //曲名
        artist: 'PORAN',  //楽曲クリエイター
        duration: '2:09',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/ACCEL_ZERO_1.0.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/ACCEL_ZERO_1.0.png', //楽曲画像
        composer: 'PORAN',  //作曲者
        chartMaker: null,  //譜面制作者
        description: '音奏書き下ろしだが、とある都合で没曲となった。'
    },
    { 
        title: '0739715306389',  //曲名
        artist: 'PORAN',  //楽曲クリエイター
        duration: '4:00',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/0739715306389.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/0739715306389.png', //楽曲画像
        composer: 'PORAN',  //作曲者
        chartMaker: '大福モドキ',  //譜面制作者
        description: '現在隠されている。'
    },
    { 
        title: 'EX001-G2',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:09',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/EX001-G2.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/EX001-G2.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: null,  //譜面制作者
        description: '音奏書き下ろしだが、とある都合で没曲となった。'
    },
    { 
        title: 'R.N.A',  //曲名
        artist: 'PORAN',  //楽曲クリエイター
        duration: '2:13',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/R.N.A.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/R.N.A.png', //楽曲画像
        composer: 'PORAN',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '数少ないLUNATIC楽曲の一つで、LUNATIC初心者にはおすすめの譜面。'
    },
    { 
        title: 'クリスマス？そんなのぶち壊して無くしてやる！',  //曲名
        artist: 'ポッキー',  //楽曲クリエイター
        duration: '0:53',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/来年も「ハッピー ・ メリクリ」目指して頑張ります.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/来年も「ハッピー ・ メリクリ」目指して頑張ります.png', //楽曲画像
        composer: 'ポッキー',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '現在隠されている。'
    },
    { 
        title: 'Re.Mjoete',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '3:54',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/Re.Mjoete.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/Re.Mjoete.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: 'カンキツ',  //譜面制作者
        description: '初心者にお勧めの譜面。'
    },
    { 
        title: 'メリーさんの羊  音奏ver',  //曲名
        artist: 'カンキツ',  //楽曲クリエイター
        duration: '2:37',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/メリーさんの羊  音奏ver.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/メリーさんの羊.png', //楽曲画像
        composer: 'カンキツ',  //作曲者
        chartMaker: '?？?',  //譜面制作者
        description: '?❓?'
    },
    /*
    { 
        title: 'テストソング 1 (オリジナルGM)',  //曲名
        artist: 'クリエイターA',  //楽曲クリエイター
        duration: '3:45',  //曲の時間
        // 🚨 ここを新しいサーバーの楽曲URLに変更してください
        src: 'https://onsou2025.github.io/Music-Station/Music/test_song_1.mp3',  //楽曲URL
        art: 'https://onsou2025.github.io/Music-Station/images/track_01_art.png', //楽曲画像
        composer: 'Alpha Beat',  //作曲者
        chartMaker: 'ノァ / Noah',  //譜面制作者
        description: 'これはテスト用の楽曲です。高速なブレイクビーツとメロディックなシンセが特徴の、アップテンポなフュージョン曲です。音ゲーのオープニングテーマをイメージして作られました。'
    },
    */
];

// DOM要素の取得
const playlistContainer = document.getElementById('playlist-container');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerAlbumArt = document.getElementById('player-album-art');
const progressBar = document.getElementById('progress-bar');
const seekBar = document.getElementById('seek-bar');
const currentTimeSpan = document.getElementById('current-time');
const durationSpan = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');

// 詳細情報要素の取得
const detailComposer = document.getElementById('detail-composer');
const detailChartMaker = document.getElementById('detail-chart-maker');
const detailChartContainer = document.getElementById('detail-chart-container');
const detailDescription = document.getElementById('detail-description');


/**
 * 時間（秒）を「m:ss」形式にフォーマット
 */
function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/**
 * プレイリストを描画
 */
function renderPlaylist() {
    playlistContainer.innerHTML = '';
    if (trackList.length === 0) {
        playlistContainer.innerHTML = '<p class="text-center text-gray-500 py-6">現在、楽曲の準備中です。</p>';
        return;
    }

    trackList.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = `music-item flex items-center justify-between p-3 rounded-lg border border-gray-100 transition-all duration-300 cursor-pointer hover:bg-cyan-50 hover:border-cyan-200`;
        item.dataset.index = index;
        item.innerHTML = `
            <div class="flex items-center min-w-0">
                <i class="fas fa-play-circle text-lg text-gray-400 mr-3 play-icon flex-shrink-0"></i>
                <div class="min-w-0 overflow-hidden">
                    <p class="font-semibold text-gray-900 truncate">${track.title}</p>
                    <p class="text-sm text-gray-500 truncate">${track.artist}</p>
                </div>
            </div>
            <span class="text-sm text-gray-400 flex-shrink-0">${track.duration}</span>
        `;
        playlistContainer.appendChild(item);

        item.addEventListener('click', () => {
            loadTrack(index);
            // ユーザー操作による再生 (自動再生ブロック回避)
            audio.play().catch(error => console.error("Audio play failed:", error));
        });
    });
}

/**
 * トラックをロードし、プレイヤーUIを更新
 */
function loadTrack(index) {
    currentTrackIndex = index;
    const track = trackList[index];
    
    // UIの更新 (基本情報)
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    playerAlbumArt.src = track.art;
    
    // UIの更新 (詳細情報)
    detailComposer.textContent = track.composer || 'N/A';
    detailDescription.textContent = track.description || '楽曲紹介はまだありません。';

    // 譜面制作者情報の表示/非表示
    if (track.chartMaker && track.chartMaker.trim() !== '') {
        detailChartMaker.textContent = track.chartMaker;
        detailChartContainer.style.display = 'block';
    } else {
        detailChartContainer.style.display = 'none';
    }

    // オーディオ要素の更新
    audio.src = track.src;
    audio.load();

    // プレイリストのハイライト更新
    document.querySelectorAll('.music-item').forEach((item, i) => {
        item.classList.remove('active');
        item.querySelector('.play-icon').classList.replace('fa-pause-circle', 'fa-play-circle');
    });
    const currentItem = document.querySelector(`.music-item[data-index="${index}"]`);
    if (currentItem) {
        currentItem.classList.add('active');
        if (isPlaying) { 
             currentItem.querySelector('.play-icon').classList.replace('fa-play-circle', 'fa-pause-circle');
        }
    }
}

/**
 * 再生または一時停止を切り替える
 */
function playPauseTrack() {
    if (audio.src === '' || !audio.src) {
        loadTrack(currentTrackIndex);
    }

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
        });
    }
}

/**
 * 再生を開始
 */
function playTrack() {
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    // プレイリストアイコンを更新
    const currentIcon = document.querySelector(`.music-item[data-index="${currentTrackIndex}"] .play-icon`);
    if (currentIcon) currentIcon.classList.replace('fa-play-circle', 'fa-pause-circle');
}

/**
 * 一時停止
 */
function pauseTrack() {
    isPlaying = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    // プレイリストアイコンを更新
    const currentIcon = document.querySelector(`.music-item[data-index="${currentTrackIndex}"] .play-icon`);
    if (currentIcon) currentIcon.classList.replace('fa-pause-circle', 'fa-play-circle');
}

/**
 * 次のトラックへ
 */
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
    playPauseTrack();
}

/**
 * 前のトラックへ
 */
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrackIndex);
    playPauseTrack();
}

// --- イベントリスナー ---

// プレイヤーボタン
playPauseBtn.addEventListener('click', playPauseTrack);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

// オーディオイベント
audio.addEventListener('play', playTrack);
audio.addEventListener('pause', pauseTrack);

audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    if (!isNaN(duration)) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeSpan.textContent = formatTime(currentTime);
        seekBar.value = progressPercent; 
    }
});

audio.addEventListener('loadedmetadata', () => {
    durationSpan.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', nextTrack);

// シーク操作
seekBar.addEventListener('input', (e) => {
    const seekTo = (e.target.value / 100) * audio.duration; 
    audio.currentTime = seekTo;
});

// 音量操作
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});


// --- 初期化 ---
document.addEventListener('DOMContentLoaded', () => {
    // 音楽プレイヤーの初期化
    renderPlaylist();
    if (trackList.length > 0) {
        loadTrack(currentTrackIndex);
    }
    // 初期音量を設定
    if (volumeSlider) {
        volumeSlider.value = audio.volume;
    }

});






