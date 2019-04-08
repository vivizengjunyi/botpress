import React from 'react'
import { Badge, UncontrolledButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import { AccessControl } from '../../../App/AccessControl'
import { IoIosChatbubble } from 'react-icons/lib/io'
import { MdModeEdit, MdArchive, MdDelete, MdSkipNext, MdLock, MdMoreVert } from 'react-icons/lib/md'
import { FaCog } from 'react-icons/lib/fa'

// TODOS here :
//  * display stage request status with formatted message in tooltip

export default ({ bot, requestStageChange, deleteBot, exportBot, permissions, allowStageChange }) => (
  <div className="pipeline_bot" key={bot.id}>
    <div className="actions">
      <UncontrolledButtonDropdown>
        <DropdownToggle tag="span" className="more">
          <MdMoreVert />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="a" target="_blank" href={`${window.location.origin}/s/${bot.id}`}>
            <IoIosChatbubble /> &nbsp;Open chat
          </DropdownItem>
          <DropdownItem disabled={bot.locked} tag="a" href={`/studio/${bot.id}`}>
            <MdModeEdit />
            &nbsp;Edit in studio
          </DropdownItem>
          <DropdownItem disabled={bot.locked} tag="a" href={`/admin/bot/${bot.id}/details`}>
            <FaCog />
            &nbsp;Configs
          </DropdownItem>
          <AccessControl permissions={permissions} resource="admin.bots.*" operation="write">
            <DropdownItem onClick={exportBot}>
              <MdArchive />
              &nbsp;Export
            </DropdownItem>
            {allowStageChange && (
              <DropdownItem onClick={requestStageChange}>
                <MdSkipNext />
                &nbsp;Promote to next stage
              </DropdownItem>
            )}
            <DropdownItem onClick={deleteBot}>
              <MdDelete />
              &nbsp;Delete
            </DropdownItem>
          </AccessControl>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </div>
    <div className="title">
      {bot.locked && (
        <span>
          <MdLock className="text-primary" />
          &nbsp;
        </span>
      )}
      {bot.disabled ? <span>{bot.name}</span> : <a href={`/studio/${bot.id}`}>{bot.name}</a>}
    </div>
    <p>{bot.description}</p>
    <div>
      {bot.disabled && (
        <Badge color="warning" className="botbadge">
          disabled
        </Badge>
      )}
      {bot.private && (
        <Badge color="primary" className="botbadge">
          private
        </Badge>
      )}
      {bot.pipeline_status.stage_request && (
        <Badge color="secondary" className="botbadge">
          pending
        </Badge>
      )}
    </div>
  </div>
)
