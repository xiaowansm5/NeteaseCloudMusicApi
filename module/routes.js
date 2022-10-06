const activate_init_profile = require('./activate_init_profile')
const album = require('./album')
const album_detail = require('./album_detail')
const album_detail_dynamic = require('./album_detail_dynamic')
const album_list = require('./album_list')
const album_list_style = require('./album_list_style')
const album_new = require('./album_new')
const album_newest = require('./album_newest')
const album_songsaleboard = require('./album_songsaleboard')
const album_sub = require('./album_sub')
const album_sublist = require('./album_sublist')
const artist_album = require('./artist_album')
const artist_desc = require('./artist_desc')
const artist_detail = require('./artist_detail')
const artist_fans = require('./artist_fans')
const artist_follow_count = require('./artist_follow_count')
const artist_list = require('./artist_list')
const artist_mv = require('./artist_mv')
const artist_new_mv = require('./artist_new_mv')
const artist_new_song = require('./artist_new_song')
const artist_songs = require('./artist_songs')
const artist_sub = require('./artist_sub')
const artist_sublist = require('./artist_sublist')
const artist_top_song = require('./artist_top_song')
const artists = require('./artists')
const audio_match = require('./audio_match')
const avatar_upload = require('./avatar_upload')
const banner = require('./banner')
const batch = require('./batch')
const calendar = require('./calendar')
const captcha_sent = require('./captcha_sent')
const captcha_verify = require('./captcha_verify')
const cellphone_existence_check = require('./cellphone_existence_check')
const check_music = require('./check_music')
const cloud = require('./cloud')
const cloud_match = require('./cloud_match')
const cloudsearch = require('./cloudsearch')
const comment = require('./comment')
const comment_album = require('./comment_album')
const comment_dj = require('./comment_dj')
const comment_event = require('./comment_event')
const comment_floor = require('./comment_floor')
const comment_hot = require('./comment_hot')
const comment_hug_list = require('./comment_hug_list')
const comment_like = require('./comment_like')
const comment_music = require('./comment_music')
const comment_mv = require('./comment_mv')
const comment_new = require('./comment_new')
const comment_playlist = require('./comment_playlist')
const comment_video = require('./comment_video')
const countries_code_list = require('./countries_code_list')
const daily_signin = require('./daily_signin')
const digitalAlbum_detail = require('./digitalAlbum_detail')
const digitalAlbum_ordering = require('./digitalAlbum_ordering')
const digitalAlbum_purchased = require('./digitalAlbum_purchased')
const digitalAlbum_sales = require('./digitalAlbum_sales')
const dj_banner = require('./dj_banner')
const dj_category_excludehot = require('./dj_category_excludehot')
const dj_category_recommend = require('./dj_category_recommend')
const dj_catelist = require('./dj_catelist')
const dj_detail = require('./dj_detail')
const dj_hot = require('./dj_hot')
const dj_paygift = require('./dj_paygift')
const dj_personalize_recommend = require('./dj_personalize_recommend')
const dj_program = require('./dj_program')
const dj_program_detail = require('./dj_program_detail')
const dj_program_toplist = require('./dj_program_toplist')
const dj_program_toplist_hours = require('./dj_program_toplist_hours')
const dj_radio_hot = require('./dj_radio_hot')
const dj_recommend = require('./dj_recommend')
const dj_recommend_type = require('./dj_recommend_type')
const dj_sub = require('./dj_sub')
const dj_sublist = require('./dj_sublist')
const dj_subscriber = require('./dj_subscriber')
const dj_toplist = require('./dj_toplist')
const dj_toplist_popular = require('./dj_toplist_popular')
const dj_toplist_pay = require('./dj_toplist_pay')
const dj_toplist_newcomer = require('./dj_toplist_newcomer')
const dj_toplist_hours = require('./dj_toplist_hours')
const dj_today_perfered = require('./dj_today_perfered')
const event_del = require('./event_del')
const event_forward = require('./event_forward')
const event = require('./event')
const fm_trash = require('./fm_trash')
const follow = require('./follow')
const history_recommend_songs = require('./history_recommend_songs')
const history_recommend_songs_detail = require('./history_recommend_songs_detail')
const homepage_block_page = require('./homepage_block_page')
const homepage_dragon_ball = require('./homepage_dragon_ball')
const hot_topic = require('./hot_topic')
const hug_comment = require('./hug_comment')
const inner_version = require('./inner_version')
const like = require('./like')
const likelist = require('./likelist')
const listen_together_status = require('./listen_together_status')
const login = require('./login')
const login_cellphone = require('./login_cellphone')
const login_qr_key = require('./login_qr_key')
const login_qr_create = require('./login_qr_create')
const login_qr_check = require('./login_qr_check')
const login_refresh = require('./login_refresh')
const login_status = require('./login_status')
const logout = require('./logout')
const lyric = require('./lyric')
const mlog_music_rcmd = require('./mlog_music_rcmd')
const mlog_to_video = require('./mlog_to_video')
const mlog_url = require('./mlog_url')
const msg_comments = require('./msg_comments')
const msg_forwards = require('./msg_forwards')
const msg_notices = require('./msg_notices')
const msg_private_history = require('./msg_private_history')
const msg_private = require('./msg_private')
const msg_recentcontact = require('./msg_recentcontact')
const musician_cloudbean_obtain = require('./musician_cloudbean_obtain')
const musician_cloudbean = require('./musician_cloudbean')
const musician_data_overview = require('./musician_data_overview')
const musician_play_trend = require('./musician_play_trend')
const musician_sign = require('./musician_sign')
const musician_tasks_new = require('./musician_tasks_new')
const fmusician_tasks = require('./musician_tasks')
const mv_all = require('./mv_all')
const mv_detail = require('./mv_detail')
const mv_detail_info = require('./mv_detail_info')
const mv_exclusive_rcmd = require('./mv_exclusive_rcmd')
const mv_first = require('./mv_first')
const mv_sub = require('./mv_sub')
const mv_sublist = require('./mv_sublist')
const mv_url = require('./mv_url')
const nickname_check = require('./nickname_check')
const personal_fm = require('./personal_fm')
const personalized = require('./personalized')
const personalized_mv = require('./personalized_mv')
const personalized_djprogram = require('./personalized_djprogram')
const personalized_newsong = require('./personalized_newsong')
const personalized_privatecontent = require('./personalized_privatecontent')
const personalized_privatecontent_list = require('./personalized_privatecontent_list')
const playlist_catlist = require('./playlist_catlist')
const playlist_cover_update = require('./playlist_cover_update')
const playlist_create = require('./playlist_create')
const playlist_delete = require('./playlist_delete')
const playlist_desc_update = require('./playlist_desc_update')
const playlist_detail = require('./playlist_detail')
const playlist_highquality_tags = require('./playlist_highquality_tags')
const playlist_detail_dynamic = require('./playlist_detail_dynamic')
const playlist_hot = require('./playlist_hot')
const playlist_mylike = require('./playlist_mylike')
const playlist_subscribe = require('./playlist_subscribe')
const playlist_subscribers = require('./playlist_subscribers')
const playlist_name_update = require('./playlist_name_update')
const playlist_order_update = require('./playlist_order_update')
const playlist_tags_update = require('./playlist_tags_update')
const playlist_privacy = require('./playlist_privacy')
const playlist_track_add = require('./playlist_track_add')
const playlist_track_all = require('./playlist_track_all')
const playlist_track_delete = require('./playlist_track_delete')
const playlist_tracks = require('./playlist_tracks')
const playlist_update_playcount = require('./playlist_update_playcount')
const playlist_update = require('./playlist_update')
const playlist_video_recent = require('./playlist_video_recent')
const playmode_intelligence_list = require('./playmode_intelligence_list')
const program_recommend = require('./program_recommend')
const rebind = require('./rebind')
const recommend_dislike = require('./recommend_dislike')
const recommend_resource = require('./recommend_resource')
const recommend_songs = require('./recommend_songs')
const record_recent_album = require('./record_recent_album')
const record_recent_dj = require('./record_recent_dj')
const record_recent_playlist = require('./record_recent_playlist')
const record_recent_song = require('./record_recent_song')
const record_recent_video = require('./record_recent_video')
const record_recent_voice = require('./record_recent_voice')
const register_anonimous = require('./register_anonimous')
const register_cellphone = require('./register_cellphone')
const related_allvideo = require('./related_allvideo')
const related_playlist = require('./related_playlist')
const resource_like = require('./resource_like')
const scrobble = require('./scrobble')
const search = require('./search')
const search_default = require('./search_default')
const search_hot = require('./search_hot')
const search_hot_detail = require('./search_hot_detail')
const search_multimatch = require('./search_multimatch')
const search_suggest = require('./search_suggest')
const send_album = require('./send_album')
const send_playlist = require('./send_playlist')
const send_song = require('./send_song')
const send_text = require('./send_text')
const setting = require('./setting')
const share_resource = require('./share_resource')
const sheet_list = require('./sheet_list')
const sheet_preview = require('./sheet_preview')
const sign_happy_info = require('./sign_happy_info')
const signin_progress = require('./signin_progress')
const simi_artist = require('./simi_artist')
const simi_mv = require('./simi_mv')
const simi_playlist = require('./simi_playlist')
const simi_song = require('./simi_song')
const simi_user = require('./simi_user')
const song_detail = require('./song_detail')
const song_download_url = require('./song_download_url')
const song_order_update = require('./song_order_update')
const song_purchased = require('./song_purchased')
const song_url = require('./song_url')
const song_url_v1 = require('./song_url_v1')
const song_wiki_summary = require('./song_wiki_summary')
const top_album = require('./top_album')
const top_artists = require('./top_artists')
const top_list = require('./top_list')
const top_mv = require('./top_mv')
const top_playlist = require('./top_playlist')
const top_playlist_highquality = require('./top_playlist_highquality')
const top_song = require('./top_song')
const topic_detail = require('./topic_detail')
const topic_detail_event_hot = require('./topic_detail_event_hot')
const topic_sublist = require('./topic_sublist')
const toplist_artist = require('./toplist_artist')
const toplist_detail = require('./toplist_detail')
const toplist = require('./toplist')
const user_account = require('./user_account')
const user_audio = require('./user_audio')
const user_binding = require('./user_binding')
const user_bindingcellphone = require('./user_bindingcellphone')
const user_cloud = require('./user_cloud')
const user_cloud_detail = require('./user_cloud_detail')
const user_cloud_del = require('./user_cloud_del')
const user_comment_history = require('./user_comment_history')
const user_detail = require('./user_detail')
const user_dj = require('./user_dj')
const user_event = require('./user_event')
const user_followeds = require('./user_followeds')
const user_follows = require('./user_follows')
const user_record = require('./user_record')
const user_level = require('./user_level')
const user_replacephone = require('./user_replacephone')
const user_subcount = require('./user_subcount')
const user_playlist = require('./user_playlist')
const video_category_list = require('./video_category_list')
const video_detail = require('./video_detail')
const video_detail_info = require('./video_detail_info')
const video_group = require('./video_group')
const video_group_list = require('./video_group_list')
const video_sub = require('./video_sub')
const video_timeline_all = require('./video_timeline_all')
const video_timeline_recommend = require('./video_timeline_recommend')
const video_url = require('./video_url')
const vip_growthpoint_detailsv = require('./vip_growthpoint_details')
const vip_growthpoint = require('./vip_growthpoint')
const vip_growthpoint_get = require('./vip_growthpoint_get')
const vip_tasks = require('./vip_tasks')
const vip_info = require('./vip_info')
const vip_timemachine = require('./vip_timemachine')
const weblog = require('./weblog')
const yunbei = require('./yunbei')
const yunbei_expense = require('./yunbei_expense')
const yunbei_info = require('./yunbei_info')
const yunbei_rcmd_song = require('./yunbei_rcmd_song')
const yunbei_rcmd_song_history = require('./yunbei_rcmd_song_history')
const yunbei_receipt = require('./yunbei_receipt')
const yunbei_sign = require('./yunbei_sign')
const yunbei_task_finish = require('./yunbei_task_finish')
const yunbei_tasks_todo = require('./yunbei_tasks_todo')
const yunbei_tasks = require('./yunbei_tasks')
const yunbei_today = require('./yunbei_today')

module.exports = {
  activate_init_profile,
  album,
  album_detail,
  album_detail_dynamic,
  album_list,
  album_list_style,
  album_new,
  album_newest,
  album_songsaleboard,
  album_sub,
  album_sublist,
  artist_album,
  artist_desc,
  artist_detail,
  artist_fans,
  artist_follow_count,
  artist_list,
  artist_mv,
  artist_new_mv,
  artist_new_song,
  artist_songs,
  artist_sub,
  artist_sublist,
  artist_top_song,
  artists,
  audio_match,
  avatar_upload,
  banner,
  batch,
  calendar,
  captcha_sent,
  captcha_verify,
  cellphone_existence_check,
  check_music,
  cloud,
  cloud_match,
  cloudsearch,
  comment,
  comment_album,
  comment_dj,
  comment_event,
  comment_floor,
  comment_hot,
  comment_hug_list,
  comment_like,
  comment_music,
  comment_mv,
  comment_new,
  comment_playlist,
  comment_video,
  countries_code_list,
  daily_signin,
  digitalAlbum_detail,
  digitalAlbum_ordering,
  digitalAlbum_purchased,
  digitalAlbum_sales,
  dj_banner,
  dj_category_excludehot,
  dj_category_recommend,
  dj_catelist,
  dj_detail,
  dj_hot,
  dj_paygift,
  dj_personalize_recommend,
  dj_program,
  dj_program_detail,
  dj_program_toplist,
  dj_program_toplist_hours,
  dj_radio_hot,
  dj_recommend,
  dj_recommend_type,
  dj_sub,
  dj_sublist,
  dj_subscriber,
  dj_toplist,
  dj_toplist_popular,
  dj_toplist_pay,
  dj_toplist_newcomer,
  dj_toplist_hours,
  dj_today_perfered,
  event_del,
  event_forward,
  event,
  fm_trash,
  follow,
  history_recommend_songs,
  history_recommend_songs_detail,
  homepage_block_page,
  homepage_dragon_ball,
  hot_topic,
  hug_comment,
  inner_version,
  like,
  likelist,
  listen_together_status,
  login,
  login_cellphone,
  login_qr_key,
  login_qr_create,
  login_qr_check,
  login_refresh,
  login_status,
  logout,
  lyric,
  mlog_music_rcmd,
  mlog_to_video,
  mlog_url,
  msg_comments,
  msg_forwards,
  msg_notices,
  msg_private_history,
  msg_private,
  msg_recentcontact,
  musician_cloudbean_obtain,
  musician_cloudbean,
  musician_data_overview,
  musician_play_trend,
  musician_sign,
  musician_tasks_new,
  fmusician_tasks,
  mv_all,
  mv_detail,
  mv_detail_info,
  mv_exclusive_rcmd,
  mv_first,
  mv_sub,
  mv_sublist,
  mv_url,
  nickname_check,
  personal_fm,
  personalized,
  personalized_mv,
  personalized_djprogram,
  personalized_newsong,
  personalized_privatecontent,
  personalized_privatecontent_list,
  playlist_catlist,
  playlist_cover_update,
  playlist_create,
  playlist_delete,
  playlist_desc_update,
  playlist_detail,
  playlist_highquality_tags,
  playlist_detail_dynamic,
  playlist_hot,
  playlist_mylike,
  playlist_subscribe,
  playlist_subscribers,
  playlist_name_update,
  playlist_order_update,
  playlist_tags_update,
  playlist_privacy,
  playlist_track_add,
  playlist_track_all,
  playlist_track_delete,
  playlist_tracks,
  playlist_update_playcount,
  playlist_update,
  playlist_video_recent,
  playmode_intelligence_list,
  program_recommend,
  rebind,
  recommend_dislike,
  recommend_resource,
  recommend_songs,
  record_recent_album,
  record_recent_dj,
  record_recent_playlist,
  record_recent_song,
  record_recent_video,
  record_recent_voice,
  register_anonimous,
  register_cellphone,
  related_allvideo,
  related_playlist,
  resource_like,
  scrobble,
  search,
  search_default,
  search_hot,
  search_hot_detail,
  search_multimatch,
  search_suggest,
  send_album,
  send_playlist,
  send_song,
  send_text,
  setting,
  share_resource,
  sheet_list,
  sheet_preview,
  sign_happy_info,
  signin_progress,
  simi_artist,
  simi_mv,
  simi_playlist,
  simi_song,
  simi_user,
  song_detail,
  song_download_url,
  song_order_update,
  song_purchased,
  song_url,
  song_url_v1,
  song_wiki_summary,
  top_album,
  top_artists,
  top_list,
  top_mv,
  top_playlist,
  top_playlist_highquality,
  top_song,
  topic_detail,
  topic_detail_event_hot,
  topic_sublist,
  toplist_artist,
  toplist_detail,
  toplist,
  user_account,
  user_audio,
  user_binding,
  user_bindingcellphone,
  user_cloud,
  user_cloud_detail,
  user_cloud_del,
  user_comment_history,
  user_detail,
  user_dj,
  user_event,
  user_followeds,
  user_follows,
  user_record,
  user_level,
  user_replacephone,
  user_subcount,
  user_playlist,
  video_category_list,
  video_detail,
  video_detail_info,
  video_group,
  video_group_list,
  video_sub,
  video_timeline_all,
  video_timeline_recommend,
  video_url,
  vip_growthpoint_detailsv,
  vip_growthpoint,
  vip_growthpoint_get,
  vip_tasks,
  vip_info,
  vip_timemachine,
  weblog,
  yunbei,
  yunbei_expense,
  yunbei_info,
  yunbei_rcmd_song,
  yunbei_rcmd_song_history,
  yunbei_receipt,
  yunbei_sign,
  yunbei_task_finish,
  yunbei_tasks_todo,
  yunbei_tasks,
  yunbei_today,
}
