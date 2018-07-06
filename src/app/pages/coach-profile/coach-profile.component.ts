import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {CalendarEvent, DAYS_OF_WEEK, CalendarEventTitleFormatter} from 'angular-calendar';
import {CustomEventTitleFormatter} from './../../services/custom-event-title-formatter.provider';
import {CustomDateFormatter} from './../../services/custom-date-formatter.provider';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../services/api-service.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CustomDateFormatter,
      useClass: CustomDateFormatter
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    },
    ApiService
  ]
})
export class CoachProfileComponent implements OnInit {
  initialPrecision = 0;
  initialMindGame = 0;
  initialCom = 0;
  initialDeplacement = 0;
  initialReflexes = 0;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 0.5;
  thumbLabel = true;
  vertical = false;
  currentCoach: any = {
    'coachInfos': [
      {
        'nbCoin': 0,
        'image': '',
        'plain': '0',
        'couthoraire': 0,
        'description': '',
        'note': 0,
        'jeu': null,
        'age': 0,
        'divers': '',
        'pays': '',
        'langue': '',
        'id': 17,
        'username': 'coach',
        'usernameCanonical': 'coach',
        'salt': 'njg7916wjb44g848gwcwwkkgs8soggw',
        'email': 'coach@mail.fr',
        'emailCanonical': 'coach@mail.fr',
        'password': '$2y$13$njg7916wjb44g848gwcwweTNQCTtcaq8fm/3zr6kLrpAE387vUth2',
        'plainPassword': null,
        'lastLogin': {
          'timezone': {
            'name': 'UTC',
            'transitions': [
              {
                'ts': -9223372036854775808,
                'time': '-292277022657-01-27T08:29:52+0000',
                'offset': 0,
                'isdst': false,
                'abbr': 'UTC'
              }
            ],
            'location': {
              'country_code': '??',
              'latitude': 0,
              'longitude': 0,
              'comments': ''
            }
          },
          'offset': 0,
          'timestamp': 1530824712
        },
        'confirmationToken': null,
        'roles': [
          'ROLE_COACH',
          'ROLE_USER'
        ],
        'accountNonExpired': true,
        'accountNonLocked': true,
        'credentialsNonExpired': true,
        'credentialsExpired': false,
        'enabled': true,
        'expired': false,
        'locked': false,
        'superAdmin': false,
        'user': false,
        'passwordRequestedAt': null,
        'groups': [],
        'groupNames': []
      }
    ],
    'coachProgrammes': [
      {
        'seanceId': 31,
        'seanceNom': 'aa',
        'seanceDescription': 'azer',
        'programmeId': 22,
        'programmeNom': 'Test',
        'programmeDescription': 'test',
        'prgrammeCoin': 100,
        'programmeSemaine': 1
      },
      {
        'seanceId': 32,
        'seanceNom': 'bb',
        'seanceDescription': 'azefqsdfqsdf',
        'programmeId': 22,
        'programmeNom': 'Test',
        'programmeDescription': 'test',
        'prgrammeCoin': 100,
        'programmeSemaine': 1
      },
      {
        'seanceId': 33,
        'seanceNom': 'p2',
        'seanceDescription': 'seance p2',
        'programmeId': 23,
        'programmeNom': 'Test1',
        'programmeDescription': 'test2',
        'prgrammeCoin': 1000,
        'programmeSemaine': 2
      }
    ],
    'coachSeanceSolos': [
      {
        'user': {
          'nbCoin': 0,
          'image': '',
          'plain': '0',
          'couthoraire': 0,
          'description': '',
          'note': 0,
          'jeu': null,
          'age': 0,
          'divers': '',
          'pays': '',
          'langue': '',
          'id': 17,
          'username': 'coach',
          'usernameCanonical': 'coach',
          'salt': 'njg7916wjb44g848gwcwwkkgs8soggw',
          'email': 'coach@mail.fr',
          'emailCanonical': 'coach@mail.fr',
          'password': '$2y$13$njg7916wjb44g848gwcwweTNQCTtcaq8fm/3zr6kLrpAE387vUth2',
          'plainPassword': null,
          'lastLogin': {
            'timezone': {
              'name': 'UTC',
              'transitions': [
                {
                  'ts': -9223372036854775808,
                  'time': '-292277022657-01-27T08:29:52+0000',
                  'offset': 0,
                  'isdst': false,
                  'abbr': 'UTC'
                }
              ],
              'location': {
                'country_code': '??',
                'latitude': 0,
                'longitude': 0,
                'comments': ''
              }
            },
            'offset': 0,
            'timestamp': 1530824712
          },
          'confirmationToken': null,
          'roles': [
            'ROLE_COACH',
            'ROLE_USER'
          ],
          'accountNonExpired': true,
          'accountNonLocked': true,
          'credentialsNonExpired': true,
          'credentialsExpired': false,
          'enabled': true,
          'expired': false,
          'locked': false,
          'superAdmin': false,
          'user': false,
          'passwordRequestedAt': null,
          'groups': [],
          'groupNames': []
        },
        'id': 3,
        'nom': 'azer',
        'description': 'azer'
      }
    ]
  };
  programmes = [];
  infos;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Click me',
      start: new Date('2018-07-04T16:00:00'),
      end: new Date('2018-07-04T17:00:00'),
    },
    {
      title: 'Or click me',
      start: new Date('2018-07-04T17:00:00'),
      end: new Date('2018-07-04T18:00:00'),
    }
  ];

  locale = 'fr';

  handleEvent(event) {
    console.log(event);
    $('#calendarModal').modal({
      keyboard: false,
    });
    this.infos = event.title;
  }

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.apiService.getCoachById(params['id']).subscribe(coachData => {
    //     console.log(coachData);
    //     this.currentCoach = coachData;
    //     // userIcon = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    //     // nbHeures = 105;
    //     // age = 25;
    //     // pays = 'France';
    //     // lang = 'Fr';
    //     // divers = 'Aucune idée';
    //   });
    // });

    this.currentCoach.coachProgrammes.forEach(seance => {
        console.log(seance.programmeId);
        const searchProgramme = this.programmes.findIndex(item => {
          return item.programmeId === seance.programmeId;
        });
        console.log(searchProgramme);
        if (searchProgramme === -1) {
          this.programmes.push({
            programmeId: seance.programmeId,
            programmeNom: seance.programmeNom,
            programmeDescription: 'test',
            prgrammeCoin: 100,
            programmeSemaine: 1,
            seances: [
              seance
            ]
          });
        } else {
          this.programmes[searchProgramme].seances.push(seance);
        }
      }
    );
  }

  ngOnInit() {
  }
  depenserGC(){
    
  }
}
