'use strict';

/**
 * Dummy JS file for smart IDEs like php/webStorm.
 *
 * Purpose of this file is to help IDE to use autocomplete features.
 */
var sails = {
    model: {
        user: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            username:                   '{string}',
            email:                      '{string}',
            firstName:                  '{string}',
            lastName:                   '{string}',
            admin:                      '{boolean}',
            language:                   '{string}',
            momentFormatDate:           '{string}',
            momentFormatTime:           '{string}',
            momentFormatDateTime:       '{string}',
            momentTimezone:             '{string}',
            passports:                  '{sails.model.passport[]}',
            histories:                  '{sails.model.history[]}',
            projectManager:             '{sails.model.project[]}',
            createdUsers:               '{sails.model.user[]}',
            updatedUsers:               '{sails.model.user[]}',
            createdProjects:            '{sails.model.project[]}',
            updatedProjects:            '{sails.model.project[]}',
            createdSprints:             '{sails.model.sprint[]}',
            updatedSprints:             '{sails.model.sprint[]}',
            createdStories:             '{sails.model.story[]}',
            updatedStories:             '{sails.model.story[]}',
            createdMilestones:          '{sails.model.milestone[]}',
            updatedMilestones:          '{sails.model.milestone[]}',
            createdEpics:               '{sails.model.epic[]}',
            updatedEpics:               '{sails.model.epic[]}',
            createdTaskTypes:           '{sails.model.taskType[]}',
            updatedTaskTypes:           '{sails.model.taskType[]}',
            createdTasks:               '{sails.model.task[]}',
            updatedTasks:               '{sails.model.task[]}',
            createdExternalLinks:       '{sails.model.externalLink[]}',
            updatedExternalLinks:       '{sails.model.externalLink[]}',
            createdExcludeSprintDays:   '{sails.model.externalLink[]}',
            updatedExcludeSprintDays:   '{sails.model.externalLink[]}',
            createdComments:            '{sails.model.comment[]}',
            updatedComments:            '{sails.model.comment[]}',
            createdFiles:               '{sails.model.file[]}',
            updatedFiles:               '{sails.model.file[]}',
            createdLinks:               '{sails.model.link[]}',
            updatedLinks:               '{sails.model.link[]}',
            fullName:                   '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        passport: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            protocol:                   '{string}',
            password:                   '{string}',
            provider:                   '{string}',
            identifier:                 '{string}',
            tokens:                     '{json}',
            user:                       '{sails.model.user}',
            validatePassword:           '{function}'
        },
        project: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            dateStart:                  '{date}',
            dateEnd:                    '{date}',
            ignoreWeekends:             '{boolean}',
            manager:                    '{sails.model.user}',
            phases:                     '{sails.model.phase[]}',
            taskTypes:                  '{sails.model.taskType[]}',
            sprints:                    '{sails.model.sprint[]}',
            stories:                    '{sails.model.story[]}',
            milestones:                 '{sails.model.milestone[]}',
            epics:                      '{sails.model.epic[]}',
            externalLinks:              '{sails.model.externalLink[]}',
            phaseDurations:             '{sails.model.phaseDuration[]}',
            durationDays:               '{function}',
            dateStartObject:            '{function}',
            dateEndObject:              '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        phase: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            backgroundColor:            '{string}',
            order:                      '{number}',
            taskCount:                  '{number}',
            isDone:                     '{boolean}',
            project:                    '{sails.model.project}',
            tasks:                      '{sails.model.task[]}',
            phaseDurations:             '{sails.model.phaseDuration[]}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        taskType: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            order:                      '{number}',
            colorChart:                 '{string}',
            colorTaskContainer:         '{string}',
            colorTaskText:              '{string}',
            project:                    '{sails.model.project}',
            tasks:                      '{sails.model.task[]}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        sprint: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            dateStart:                  '{date}',
            dateEnd:                    '{date}',
            ignoreWeekends:             '{boolean}',
            project:                    '{sails.model.project}',
            stories:                    '{sails.model.story[]}',
            excludeSprintDays:          '{sails.model.excludeSprintDay[]}',
            phaseDurations:             '{sails.model.phaseDuration[]}',
            durationDays:               '{function}',
            dateStartObject:            '{function}',
            dateEndObject:              '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        story: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            estimate:                   '{float}',
            priority:                   '{number}',
            isDone:                     '{boolean}',
            ignoreInBurnDownChart:      '{boolean}',
            timeStart:                  '{date}',
            timeEnd:                    '{date}',
            project:                    '{sails.model.project}',
            sprint:                     '{sails.model.sprint}',
            milestone:                  '{sails.model.milestone}',
            epic:                       '{sails.model.epic}',
            tasks:                      '{sails.model.task[]}',
            phaseDurations:             '{sails.model.phaseDuration[]}',
            estimateFormatted:          '{function}',
            timeStartObject:            '{function}',
            timeEndObject:              '{function}',
            timeDuration:               '{function}',
            timeDurationHuman:          '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        milestone: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            deadline:                   '{date}',
            project:                    '{sails.model.project}',
            stories:                    '{sails.model.story[]}',
            deadlineObject:             '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        epic: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            deadline:                   '{date}',
            project:                    '{sails.model.project}',
            stories:                    '{sails.model.story[]}',
            deadlineObject:             '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        task: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            priority:                   '{number}',
            isDone:                     '{boolean}',
            timeStart:                  '{date}',
            timeEnd:                    '{date}',
            story:                      '{sails.model.story}',
            phase:                      '{sails.model.phase}',
            taskType:                   '{sails.model.taskType}',
            phaseDurations:             '{sails.model.phaseDuration[]}',
            timeStartObject:            '{function}',
            timeEndObject:              '{function}',
            timeDuration:               '{function}',
            timeDurationHuman:          '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        externalLink: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            title:                      '{string}',
            description:                '{string}',
            link:                       '{string}',
            parameters:                 '{json}',
            project:                    '{sails.model.project}',
            links:                      '{sails.model.link[]}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        excludeSprintDay: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            day:                        '{date}',
            sprint:                     '{sails.model.sprint}',
            dayObject:                  '{function}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        history: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            objectName:                 '{string}',
            objectId:                   '{number}',
            message:                    '{string}',
            user:                       '{sails.model.user}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        comment: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            objectName:                 '{string}',
            objectId:                   '{number}',
            message:                    '{string}',
            comment:                    '{sails.model.comment}',
            comments:                   '{sails.model.comment[]}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        file: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            objectName:                 '{string}',
            objectId:                   '{number}',
            filename:                   '{string}',
            content:                    '{string}',
            size:                       '{number}',
            mimeType:                   '{string}',
            description:                '{string}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        link: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            createdUser:                '{sails.model.user}',
            updatedUser:                '{sails.model.user}',
            objectName:                 '{string}',
            objectId:                   '{number}',
            parameters:                 '{json}',
            title:                      '{string}',
            link:                       '{string}',
            externalLink:               '{sails.model.externalLink}',
            objectTitle:                '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        },
        phaseDuration: {
            id:                         '{number}',
            createdAt:                  '{date}',
            updatedAt:                  '{date}',
            timeStart:                  '{date}',
            timeEnd:                    '{date}',
            duration:                   '{number}',
            durationRelative:           '{number}',
            open:                       '{boolean}',
            project:                    '{sails.model.project}',
            sprint:                     '{sails.model.sprint}',
            story:                      '{sails.model.story}',
            phase:                      '{sails.model.phase}',
            task:                       '{sails.model.task}',
            timeStartObject:            '{function}',
            timeEndObject:              '{function}',
            timeDuration:               '{function}',
            timeDurationHuman:          '{function}',
            createdAtObject:            '{function}',
            updatedAtObject:            '{function}'
        }
    }
};
