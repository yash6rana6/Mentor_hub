import Image from 'next/image';
import React from 'react';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
  CONNECTING = 'CONNECTING',
  DISCONNECTED = 'DISCONNECTED',
}

interface AgentProps {
  userName: string;
}

const Agent = ({ userName }: AgentProps) => {
  const isSpeaking = true;
  const callStatus = CallStatus.DISCONNECTED;

  return (
    <>
      <div className="call-view">
        <div className="card-interview">
          <div className="avatar">
            <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>Ai Interview</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        {callStatus !== CallStatus.ACTIVE ? (
          <button className="relative btn-call">
            <span
              className={`absolute animate-ping rounded-full opacity-75 ${
                callStatus !== CallStatus.CONNECTING ? 'hidden' : ''
              }`}
            >
              {callStatus === CallStatus.CONNECTING ? 'Connecting...' : ''}
            </span>
            Call
          </button>
        ) : (
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            <span>{callStatus === CallStatus.DISCONNECTED ? 'Disconnected' : 'End Call'}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
