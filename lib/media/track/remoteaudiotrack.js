'use strict';

const AudioTrack = require('./audiotrack');
const mixinRemoteMediaTrack = require('./remotemediatrack');

const RemoteMediaAudioTrack = mixinRemoteMediaTrack(AudioTrack);

/**
 * A {@link RemoteAudioTrack} represents an {@link AudioTrack} published to a
 * {@link Room} by a {@link RemoteParticipant}.
 * @extends AudioTrack
 * @property {boolean} isSubscribed - Whether the {@link RemoteAudioTrack} is
 *   currently subscribed to
 * @property {Track.SID} sid - The {@link RemoteAudioTrack}'s SID
 * @emits RemoteAudioTrack#disabled
 * @emits RemoteAudioTrack#enabled
 * @emits RemoteAudioTrack#started
 * @emits RemoteAudioTrack#unsubscribed
 */
class RemoteAudioTrack extends RemoteMediaAudioTrack {
  /**
   * Construct a {@link RemoteAudioTrack}.
   * @param {MediaTrackReceiver} mediaTrackReceiver - An audio MediaStreamTrack container
   * @param {RemoteTrackPublicationSignaling} signaling - The {@link Track} signaling
   * @param {{log: Log}} options - The {@link RemoteTrack} options
   */
  constructor(mediaTrackReceiver, signaling, options) {
    super(mediaTrackReceiver, signaling, options);
  }

  toString() {
    return `[RemoteAudioTrack #${this._instanceId}: ${this.sid}]`;
  }

  /**
   * @private
   */
  _unsubscribe() {
    return super._unsubscribe.apply(this, arguments);
  }
}

/**
 * The {@link RemoteAudioTrack} was disabled, i.e. "muted".
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   disabled
 * @event RemoteAudioTrack#disabled
 */

/**
 * The {@link RemoteAudioTrack} was enabled, i.e. "unmuted".
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   enabled
 * @event RemoteAudioTrack#enabled
 */

/**
 * The {@link RemoteAudioTrack} started. This means there is enough audio data
 * to begin playback.
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that started
 * @event RemoteAudioTrack#started
 */

/**
 * The {@link RemoteAudioTrack} was unsubscribed from.
 * @param {RemoteAudioTrack} track - The {@link RemoteAudioTrack} that was
 *   unsubscribed from
 * @event RemoteAudioTrack#unsubscribed
 */

module.exports = RemoteAudioTrack;
