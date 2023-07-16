<!--
// JavaScriptテトリス  Programed by たこじゃらし
// このスクリプトは、商用目的でなければ、自由に使っていただいて結構です。
// 改造、配布も自由に行っていただいてかまいません。
// 作者への連絡も強要しません。
// ただし、この５行のコメントは消さないでください。

tet_map = new Array(512);	// テトリスのマップ1
tet_map_col = new Array(512);	// テトリスのマップ2（色）
blk_styl = new Array(16);	// ブロックの形
var blk_knd = 1;		// ブロックの種類(1～7)
nx_blk_styl = new Array(16);	// 次のブロックの形
var nx_blk_knd = 1;		// 次のブロックの種類(1～7)
bk_blk_styl = new Array(16);	// ブロックの形(バックアップ用)

var blk_x,blk_y;		// ブロックの位置
var dwn_cnt = 0;		// ダウンしてからの待ち時間
var speed = 10;			// ゲームスピード
var spd_cnt = 0;		// スピードカウント
var total_line = 0;		// 消したトータルライン
var level = 0;			// レベル
var timer;

var start_flg = 0;		// ゲームスタートフラグ


// ゲーム初期化＆開始
function init_game() {
	if( start_flg == 0 ) {
		init_map();	// マップ初期化
		view_new();	// 新しいブロック表示

		dwn_cnt = 0;	// ダウンしてからの待ち時間を0クリア
		speed = 25;	// ゲームスピード
		spd_cnt = 0;	// スピードカウント

		total_line = 0;		// 消したトータルライン
		level = 0;		// レベル

		timer = setTimeout("auto_dwn()",1);
		self.document.sc_form.score.value = total_line;

		start_flg = 1;
	}
}

// ゲームオーバー
function game_over() {
	clearTimeout(timer);
	start_flg = 0;

	// マップを灰色に表示
	for( i=0;i<24;i++ ) {
		for( j=0;j<8;j++ ) {
			p = (i+4)*16+j+4;
			img_p = i*8+j;
			if( tet_map[p] > 0 ) {
				self.document.images[img_p].src="9.jpg";
			}
		}
	}

	w_data = "ゲームオーバー\nレベル"+level;
	alert(w_data);
}


// マップ初期化
function init_map() {
	for(i=0;i<512;i++) {
		tet_map[i] = 0;
		tet_map_col[i] = 0;
	}

	p=0;
	// ダミーの上4行を１で埋める
	for(i=0;i<4;i++) {
		for(j=0;j<16;j++) {
			tet_map[p] = 1;
			p++;
		}
	}
	// 次の24行は前後8個分を1で埋める
	for(i=0;i<24;i++ ) {
		tet_map[p] = 1; p++;
		tet_map[p] = 1; p++;
		tet_map[p] = 1; p++;
		tet_map[p] = 1; p++;
		p+=8;
		tet_map[p] = 1; p++;
		tet_map[p] = 1; p++;
		tet_map[p] = 1; p++;
		tet_map[p] = 1; p++;
	}
	// ダミーの下4行を１で埋める
	for(i=0;i<4;i++) {
		for(j=0;j<16;j++) {
			tet_map[p] = 1;
			p++;
		}
	}

	// マップを表示
	view_map(0,0,7,23);

	// 次のブロックを設定＆表示
	view_next();
}

// マップ表示
function view_map(sx,sy,ex,ey) {
	vie = "";		// 表示用

	stx = sx+4;		// 最初の表示位置(X)
	sty = sy+4;		// 最初の表示位置(Y)
	xsz = ex - sx + 1;	// サイズ(X)
	ysz = ey - sy + 1;	// サイズ(Y)

	for( i=0;i<ysz;i++ ) {
		for( j=0;j<xsz;j++ ) {
			p = (sty+i)*16 + stx + j;
			img_p = ( sty - 4 + i)*8+stx-4+j;

			if( (stx+j) > 11 ) continue;
			if( (stx+j) < 4 ) continue;
			if( (sty+i) > 27 ) continue;

			if( tet_map[p] == 1 ) {
				vie=tet_map_col[p]+".jpg";
				if(img_p >= 0 ) self.document.images[img_p].src=vie;
			} else {
				if(img_p >= 0 ) self.document.images[img_p].src="0.jpg";
			}
		}
	}
}

// 次のブロックの取得＆表示
function view_next() {
	vie="";		// 表示用

	dt = new Date();
	sec = dt.getSeconds()+1;
	for(i=0;i<sec;i++) {
		r = Math.round(Math.random() * 6);
	}
	// 次のブロックの種類
	nx_blk_knd=r+1;
	// ブロックの形を入れる
	if( nx_blk_knd == 1 ) {		// 赤棒
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 1;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 0;
		nx_blk_styl[ 4+2] = 1;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 0;		// 3
		nx_blk_styl[ 8+1] = 0;
		nx_blk_styl[ 8+2] = 1;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 0;
		nx_blk_styl[12+2] = 1;
		nx_blk_styl[12+3] = 0;
	}
	if( nx_blk_knd == 2) {		// 黄色四角
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 0;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 1;
		nx_blk_styl[ 4+2] = 1;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 0;		// 3
		nx_blk_styl[ 8+1] = 1;
		nx_blk_styl[ 8+2] = 1;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 0;
		nx_blk_styl[12+2] = 0;
		nx_blk_styl[12+3] = 0;
	}
	if( nx_blk_knd == 3) {		// 青鍵
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 0;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 1;
		nx_blk_styl[ 4+2] = 1;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 0;		// 3
		nx_blk_styl[ 8+1] = 1;
		nx_blk_styl[ 8+2] = 0;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 1;
		nx_blk_styl[12+2] = 0;
		nx_blk_styl[12+3] = 0;
	}
	if( nx_blk_knd == 4) {		// オレンジ鍵
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 0;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 1;
		nx_blk_styl[ 4+2] = 1;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 0;		// 3
		nx_blk_styl[ 8+1] = 0;
		nx_blk_styl[ 8+2] = 1;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 0;
		nx_blk_styl[12+2] = 1;
		nx_blk_styl[12+3] = 0;
	}
	if( nx_blk_knd == 5) {		// 黄緑段
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 0;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 0;
		nx_blk_styl[ 4+2] = 1;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 0;		// 3
		nx_blk_styl[ 8+1] = 1;
		nx_blk_styl[ 8+2] = 1;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 1;
		nx_blk_styl[12+2] = 0;
		nx_blk_styl[12+3] = 0;
	}
	if( nx_blk_knd == 6) {		// 紫段
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 0;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 1;
		nx_blk_styl[ 4+2] = 0;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 0;		// 3
		nx_blk_styl[ 8+1] = 1;
		nx_blk_styl[ 8+2] = 1;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 0;
		nx_blk_styl[12+2] = 1;
		nx_blk_styl[12+3] = 0;
	}
	if( nx_blk_knd == 7) {		// 水色凸
		nx_blk_styl[   0] = 0;		// 1
		nx_blk_styl[   1] = 0;
		nx_blk_styl[   2] = 0;
		nx_blk_styl[   3] = 0;
		nx_blk_styl[ 4+0] = 0;		// 2
		nx_blk_styl[ 4+1] = 1;
		nx_blk_styl[ 4+2] = 0;
		nx_blk_styl[ 4+3] = 0;
		nx_blk_styl[ 8+0] = 1;		// 3
		nx_blk_styl[ 8+1] = 1;
		nx_blk_styl[ 8+2] = 1;
		nx_blk_styl[ 8+3] = 0;
		nx_blk_styl[12+0] = 0;		// 4
		nx_blk_styl[12+1] = 0;
		nx_blk_styl[12+2] = 0;
		nx_blk_styl[12+3] = 0;
	}

	// 表示
	vie = nx_blk_knd+".jpg";
	for( i=0;i<16;i++ ) {
		if( nx_blk_styl[i] == 1 ) {
			self.document.images[192+i].src=vie;
		} else {
			self.document.images[192+i].src="0.jpg";
		}
	}
}

// 新しいブロックをゲットおよび表示
function view_new() {

	// 次のブロックを今のブロックに
	blk_knd = nx_blk_knd;
	for( i=0;i<16;i++ ) {
		blk_styl[i] = nx_blk_styl[i]
	}

	// ブロック位置設定
	if( blk_knd == 1 ) {
		blk_y = 4;
	} else {
		blk_y = 3;
	}
	blk_x = 7;

	// 次のブロック設定
	view_next();

	// ブロックがぶつかったかどうかチェック
	chk = chk_blk(blk_x,blk_y);

	// ブロック表示
	view_blk();

	// ぶつかっていたらゲームオーバー
	if( chk == 0 ) {
		game_over();
	}
}

// ブロックを表示
function view_blk() {
	vie="";		// 表示用

	stx = blk_x;		// 最初の表示位置(X)
	sty = blk_y;		// 最初の表示位置(Y)

	for( i=0;i<4;i++ ) {
		for( j=0;j<4;j++ ) {
			p = (sty+i)*16 + stx + j;
			img_p = (sty+i-4)*8+(stx+j-4);
			blk_p = i*4+j;

			if( (stx+j) > 11 ) continue;
			if( (stx+j) < 4 ) continue;
			if( (sty+i) > 27 ) continue;

			if( blk_styl[blk_p] > 0 ) {
				vie=blk_knd+".jpg";
				self.document.images[img_p].src=vie;
			} else {
				if( tet_map[p] == 1) {
					vie=tet_map_col[p]+".jpg";
					if( img_p >= 0) self.document.images[img_p].src=vie;
				} else {
					if( img_p >= 0) self.document.images[img_p].src="0.jpg";
				}
			}
		}
	}
}

//ブロックがぶつかったかどうかチェック
function chk_blk(x,y) {
	for( i=0;i<4;i++ ) {
		for( j=0;j<4;j++ ) {
			map_p = (y + i)*16 + x+j;
			blk_p = i*4+j;
			if( tet_map[map_p] > 0 && blk_styl[blk_p] > 0 ) {
				return	0;	// Out
			}
		}
	}
	return 1;		// OK
}


// 自由落下
function auto_dwn() {
	spd_cnt++;
	if( spd_cnt > speed ) {
		spd_cnt = 0;
		blk_dwn();
	}
	if( start_flg > 0) timer = setTimeout("auto_dwn()",1);
}

// 操作でブロックを下に落とす
function blk_dwn2() {
	blk_dwn();
	speed = 0;
}

// ブロックを下に落とす
function blk_dwn() {
	// 下に落とせるかどうかチェック
	chk = chk_blk(blk_x,blk_y+1);

	// 下に落とせない場合ブロックカウントをインクリメント
	if( chk == 0 ) {
		dwn_cnt++;
		// ダウンカウントが5になったらブロックを固定して次のブロックを出す
		if( dwn_cnt == 5 ) {
			// スピードを元に戻す
			speed = 25-level;
			if( speed < 0 ) speed = 0;
			dwn_cnt = 0;
			for( i=0;i<4;i++ ) {
				for( j=0;j<4;j++ ) {
					map_p = (blk_y + i)*16 + blk_x + j;
					blk_p = i*4+j;
					if( blk_styl[blk_p] > 0 ) {
						tet_map[map_p] = blk_styl[blk_p];
						tet_map_col[map_p] = blk_knd;
					}
				}
			}

			// ラインを消す
			clear_line();

			// マップ表示
//			wdata="";
//			for( i=0;i<32;i++) {
//				for( j=0;j<16;j++) {
//					p = i*16+j;
//					wdata = wdata+tet_map[p];
//				}
//				wdata = wdata+"\n";
//			}
//			alert(wdata);

			view_new();
		}
	} else {
		// 落とせる場合は落とす
		view_map(blk_x-4,blk_y-4,blk_x,blk_y);
		blk_y++;
		view_blk();
	}
}

// ブロックを右に移動
function blk_rgt() {
	if( start_flg == 0 ) return;

	// 右に移動できるかどうかチェック
	chk = chk_blk(blk_x+1,blk_y);

	// 右に移動できる場合
	if( chk == 1 ) {
		view_map(blk_x-4,blk_y-4,blk_x,blk_y);
		blk_x++;
		dwn_cnt = 0;	// ダウンカウントを0にしておく
		// スピードを元に戻す
		speed = 25-level;
		if( speed < 0 ) speed = 0;
		view_blk();
	}
}

// ブロックを左に移動
function blk_lft() {
	if( start_flg == 0 ) return;

	// 左に移動できるかどうかチェック
	chk = chk_blk(blk_x-1,blk_y);

	// 右に移動できる場合
	if( chk == 1 ) {
		view_map(blk_x-4,blk_y-4,blk_x,blk_y);
		blk_x--;
		dwn_cnt = 0;	// ダウンカウントを0にしておく
		// スピードを元に戻す
		speed = 25-level;
		if( speed < 0 ) speed = 0;
		view_blk();
	}
}


// ブロックを回転
function blk_trn() {
	if( start_flg == 0 ) return;

	// もとのデータをバックアップ
	for( i=0;i<16;i++ ) {
		bk_blk_styl[i] = blk_styl[i]
	}

	// 回転させる
	for( i=0;i<4;i++ ) {
		for( j=0;j<4;j++ ) {
			sp = i*4+j;
			dp = j*4+(3-i);
			blk_styl[dp] = bk_blk_styl[sp];
		}
	}

	// 回転後にぶつかるかどうかをチェック
	chk = chk_blk(blk_x,blk_y);

	// ぶつかる場合データを戻す
	if( chk == 0 ) {
		for( i=0;i<16;i++ ) {
			blk_styl[i] = bk_blk_styl[i]
		}
	} else {	// ぶつからない場合は、表示する
		view_map(blk_x-4,blk_y-4,blk_x,blk_y);
		dwn_cnt = 0;	// ダウンカウントを0にしておく
		view_blk();
	}
	// スピードを元に戻す
	speed = 25 -level;
	if( speed < 0 ) speed = 0;

}


//ラインを消す
function clear_line() {
	kesi_line = 0;
	ed_line = 0;
	for( i=23;i>=0;i-- ) {
		chk = 1;
		chk2 = 0;
		for( j=0;j<8;j++ ) {
			map_p = (i+4)*16+j+4;
			chk = chk * tet_map[map_p];
			chk2 = chk2 + tet_map[map_p];
		}
		if( chk == 1 ) {	// 全部１ならラインを消す
			if( kesi_line == 0 ) {	// 最初の時は、開始ラインを設定
				st_line = i;
			}
			kesi_line++;
			for( j=0;j<8;j++ ) {
				map_p = (i+4)*16+j+4;
				img_p = i*8+j;
				tet_map[map_p] = 0;
				tet_map_col[map_p] = 0;
//				self.document.images[img_p].src="0.jpg";
			}
		}
		if( chk2 == 0 ) {	// 全部0ならそこで打ち切り
			ed_line = i;
			break;
		}
	}

	// 消すラインがあるなら、前に詰める
	if( kesi_line > 0 ) {
		cnt = st_line - kesi_line;
		cnt2 = ed_line - kesi_line;
		if( cnt2 < 0 ) cnt2 = 0;
		for( i=cnt;i>=cnt2;i-- ) {
			src = i;
			dst = i+kesi_line;
			for( j=0;j<8;j++ ) {
				src_p = (src+4)*16+j+4;
				dst_p = (dst+4)*16+j+4;
				tet_map[dst_p] = tet_map[src_p] ;
				tet_map_col[dst_p] = tet_map_col[src_p] ;
			}
		}
		// マップを表示
		view_map(0,ed_line,7,st_line);
		// 点数加算、レベル加算
		total_line += kesi_line;
		self.document.sc_form.score.value = total_line;
		level = Math.round(total_line / 5);
		speed = 25-level;
		if( speed < 0 ) speed = 0;

	}
}


// -->